import { Link } from 'react-router-dom'
import styled from 'styled-components'
export const StyledLink = styled(Link)`
  color: ${props => props.color || '#FFFFFF'};
  display: block;
  font-family: Helvetica, Arial, sans-serif;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`
