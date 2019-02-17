module.exports = {
        typeDefs: /* GraphQL */ `type AggregateCompany {
  count: Int!
}

type AggregateEmployee {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Company {
  id: ID!
  companyName: String!
  companyMotto: String!
  companyEst: DateTime!
}

type CompanyConnection {
  pageInfo: PageInfo!
  edges: [CompanyEdge]!
  aggregate: AggregateCompany!
}

input CompanyCreateInput {
  companyName: String!
  companyMotto: String!
  companyEst: DateTime!
}

type CompanyEdge {
  node: Company!
  cursor: String!
}

enum CompanyOrderByInput {
  id_ASC
  id_DESC
  companyName_ASC
  companyName_DESC
  companyMotto_ASC
  companyMotto_DESC
  companyEst_ASC
  companyEst_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CompanyPreviousValues {
  id: ID!
  companyName: String!
  companyMotto: String!
  companyEst: DateTime!
}

type CompanySubscriptionPayload {
  mutation: MutationType!
  node: Company
  updatedFields: [String!]
  previousValues: CompanyPreviousValues
}

input CompanySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CompanyWhereInput
  AND: [CompanySubscriptionWhereInput!]
  OR: [CompanySubscriptionWhereInput!]
  NOT: [CompanySubscriptionWhereInput!]
}

input CompanyUpdateInput {
  companyName: String
  companyMotto: String
  companyEst: DateTime
}

input CompanyUpdateManyMutationInput {
  companyName: String
  companyMotto: String
  companyEst: DateTime
}

input CompanyWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  companyName: String
  companyName_not: String
  companyName_in: [String!]
  companyName_not_in: [String!]
  companyName_lt: String
  companyName_lte: String
  companyName_gt: String
  companyName_gte: String
  companyName_contains: String
  companyName_not_contains: String
  companyName_starts_with: String
  companyName_not_starts_with: String
  companyName_ends_with: String
  companyName_not_ends_with: String
  companyMotto: String
  companyMotto_not: String
  companyMotto_in: [String!]
  companyMotto_not_in: [String!]
  companyMotto_lt: String
  companyMotto_lte: String
  companyMotto_gt: String
  companyMotto_gte: String
  companyMotto_contains: String
  companyMotto_not_contains: String
  companyMotto_starts_with: String
  companyMotto_not_starts_with: String
  companyMotto_ends_with: String
  companyMotto_not_ends_with: String
  companyEst: DateTime
  companyEst_not: DateTime
  companyEst_in: [DateTime!]
  companyEst_not_in: [DateTime!]
  companyEst_lt: DateTime
  companyEst_lte: DateTime
  companyEst_gt: DateTime
  companyEst_gte: DateTime
  AND: [CompanyWhereInput!]
  OR: [CompanyWhereInput!]
  NOT: [CompanyWhereInput!]
}

input CompanyWhereUniqueInput {
  id: ID
  companyName: String
}

scalar DateTime

type Employee {
  id: ID!
  firstName: String!
  lastName: String!
  jobTitle: String!
  bio: String!
  avatar: String!
  age: Int!
  dateJoined: DateTime!
}

type EmployeeConnection {
  pageInfo: PageInfo!
  edges: [EmployeeEdge]!
  aggregate: AggregateEmployee!
}

input EmployeeCreateInput {
  firstName: String!
  lastName: String!
  jobTitle: String!
  bio: String!
  avatar: String!
  age: Int!
  dateJoined: DateTime!
}

type EmployeeEdge {
  node: Employee!
  cursor: String!
}

enum EmployeeOrderByInput {
  id_ASC
  id_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  jobTitle_ASC
  jobTitle_DESC
  bio_ASC
  bio_DESC
  avatar_ASC
  avatar_DESC
  age_ASC
  age_DESC
  dateJoined_ASC
  dateJoined_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type EmployeePreviousValues {
  id: ID!
  firstName: String!
  lastName: String!
  jobTitle: String!
  bio: String!
  avatar: String!
  age: Int!
  dateJoined: DateTime!
}

type EmployeeSubscriptionPayload {
  mutation: MutationType!
  node: Employee
  updatedFields: [String!]
  previousValues: EmployeePreviousValues
}

input EmployeeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EmployeeWhereInput
  AND: [EmployeeSubscriptionWhereInput!]
  OR: [EmployeeSubscriptionWhereInput!]
  NOT: [EmployeeSubscriptionWhereInput!]
}

input EmployeeUpdateInput {
  firstName: String
  lastName: String
  jobTitle: String
  bio: String
  avatar: String
  age: Int
  dateJoined: DateTime
}

input EmployeeUpdateManyMutationInput {
  firstName: String
  lastName: String
  jobTitle: String
  bio: String
  avatar: String
  age: Int
  dateJoined: DateTime
}

input EmployeeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  jobTitle: String
  jobTitle_not: String
  jobTitle_in: [String!]
  jobTitle_not_in: [String!]
  jobTitle_lt: String
  jobTitle_lte: String
  jobTitle_gt: String
  jobTitle_gte: String
  jobTitle_contains: String
  jobTitle_not_contains: String
  jobTitle_starts_with: String
  jobTitle_not_starts_with: String
  jobTitle_ends_with: String
  jobTitle_not_ends_with: String
  bio: String
  bio_not: String
  bio_in: [String!]
  bio_not_in: [String!]
  bio_lt: String
  bio_lte: String
  bio_gt: String
  bio_gte: String
  bio_contains: String
  bio_not_contains: String
  bio_starts_with: String
  bio_not_starts_with: String
  bio_ends_with: String
  bio_not_ends_with: String
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  age: Int
  age_not: Int
  age_in: [Int!]
  age_not_in: [Int!]
  age_lt: Int
  age_lte: Int
  age_gt: Int
  age_gte: Int
  dateJoined: DateTime
  dateJoined_not: DateTime
  dateJoined_in: [DateTime!]
  dateJoined_not_in: [DateTime!]
  dateJoined_lt: DateTime
  dateJoined_lte: DateTime
  dateJoined_gt: DateTime
  dateJoined_gte: DateTime
  AND: [EmployeeWhereInput!]
  OR: [EmployeeWhereInput!]
  NOT: [EmployeeWhereInput!]
}

input EmployeeWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createCompany(data: CompanyCreateInput!): Company!
  updateCompany(data: CompanyUpdateInput!, where: CompanyWhereUniqueInput!): Company
  updateManyCompanies(data: CompanyUpdateManyMutationInput!, where: CompanyWhereInput): BatchPayload!
  upsertCompany(where: CompanyWhereUniqueInput!, create: CompanyCreateInput!, update: CompanyUpdateInput!): Company!
  deleteCompany(where: CompanyWhereUniqueInput!): Company
  deleteManyCompanies(where: CompanyWhereInput): BatchPayload!
  createEmployee(data: EmployeeCreateInput!): Employee!
  updateEmployee(data: EmployeeUpdateInput!, where: EmployeeWhereUniqueInput!): Employee
  updateManyEmployees(data: EmployeeUpdateManyMutationInput!, where: EmployeeWhereInput): BatchPayload!
  upsertEmployee(where: EmployeeWhereUniqueInput!, create: EmployeeCreateInput!, update: EmployeeUpdateInput!): Employee!
  deleteEmployee(where: EmployeeWhereUniqueInput!): Employee
  deleteManyEmployees(where: EmployeeWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  company(where: CompanyWhereUniqueInput!): Company
  companies(where: CompanyWhereInput, orderBy: CompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Company]!
  companiesConnection(where: CompanyWhereInput, orderBy: CompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CompanyConnection!
  employee(where: EmployeeWhereUniqueInput!): Employee
  employees(where: EmployeeWhereInput, orderBy: EmployeeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Employee]!
  employeesConnection(where: EmployeeWhereInput, orderBy: EmployeeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EmployeeConnection!
  node(id: ID!): Node
}

type Subscription {
  company(where: CompanySubscriptionWhereInput): CompanySubscriptionPayload
  employee(where: EmployeeSubscriptionWhereInput): EmployeeSubscriptionPayload
}
`
      }
    