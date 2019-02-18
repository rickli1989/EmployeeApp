import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Loadable from 'react-loadable';
import { StaticRouter } from 'react-router-dom'
// import our main App component
import Layout from '../../src/routes';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
// import the manifest generated with the create-react-app build
import manifest from '../../build/asset-manifest.json';
import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from '@material-ui/core/styles'
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
const fetch = require('node-fetch')
// function to extract js assets from the manifest
const extractAssets = (assets, chunks) => Object.keys(assets)
    .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
    .map(k => assets[k]);


const path = require("path");
const fs = require("fs");
const httpLink = new HttpLink({
  uri: 'https://us1.prisma.sh/rick-c026d0/westpac-test/dev',
	fetch
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

const theme = createMuiTheme({
  palette: {
    primary: { main: '#e40000' }, // Westpac Red.
    secondary: { main: '#03A9F4' }
  }
})

export default (req, res, next) => {
    // get the html file created with the create-react-app build
    const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(404).end()
        }
        const modules = [];
				const context = {};
				const sheetsRegistry = new SheetsRegistry();
				const sheetsManager = new Map();
				const generateClassName = createGenerateClassName();
			  // Create a sheetsManager instance.

        // render the app as a string
        const html = ReactDOMServer.renderToString(
          <Loadable.Capture report={m => modules.push(m)}>
						<ApolloProvider client={client}>
							<JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
								<MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
									<StaticRouter location={req.url} context={context}>
				            <Layout />
					        </StaticRouter>
								</MuiThemeProvider>
							</JssProvider>
						</ApolloProvider>
          </Loadable.Capture>
        );

				const css = sheetsRegistry.toString();

				// map required assets to script tags
        const extraChunks = extractAssets(manifest, modules)
            .map(c => `<script type="text/javascript" src="/${c}"></script>`);

        // now inject the rendered app into our html and send it to the client
        return res.send(
            htmlData
                // write the React app
                .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
                // append the extra js assets
                .replace('</body>', extraChunks.join('') + '</body>')
                .replace('<style id="jss-server-side"></style>', `<style id="jss-server-side">${css}</style>`)
        );
    });
}
