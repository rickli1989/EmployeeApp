// Code generated by Prisma (prisma@1.26.6). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  employee: (where?: EmployeeWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  employee: (where: EmployeeWhereUniqueInput) => EmployeePromise;
  employees: (args?: {
    where?: EmployeeWhereInput;
    orderBy?: EmployeeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Employee>;
  employeesConnection: (args?: {
    where?: EmployeeWhereInput;
    orderBy?: EmployeeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => EmployeeConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createEmployee: (data: EmployeeCreateInput) => EmployeePromise;
  updateEmployee: (args: {
    data: EmployeeUpdateInput;
    where: EmployeeWhereUniqueInput;
  }) => EmployeePromise;
  updateManyEmployees: (args: {
    data: EmployeeUpdateManyMutationInput;
    where?: EmployeeWhereInput;
  }) => BatchPayloadPromise;
  upsertEmployee: (args: {
    where: EmployeeWhereUniqueInput;
    create: EmployeeCreateInput;
    update: EmployeeUpdateInput;
  }) => EmployeePromise;
  deleteEmployee: (where: EmployeeWhereUniqueInput) => EmployeePromise;
  deleteManyEmployees: (where?: EmployeeWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  employee: (
    where?: EmployeeSubscriptionWhereInput
  ) => EmployeeSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type EmployeeOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "firstName_ASC"
  | "firstName_DESC"
  | "lastName_ASC"
  | "lastName_DESC"
  | "jobTitle_ASC"
  | "jobTitle_DESC"
  | "bio_ASC"
  | "bio_DESC"
  | "avatar_ASC"
  | "avatar_DESC"
  | "age_ASC"
  | "age_DESC"
  | "dateJoined_ASC"
  | "dateJoined_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type EmployeeWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface EmployeeWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  firstName?: String;
  firstName_not?: String;
  firstName_in?: String[] | String;
  firstName_not_in?: String[] | String;
  firstName_lt?: String;
  firstName_lte?: String;
  firstName_gt?: String;
  firstName_gte?: String;
  firstName_contains?: String;
  firstName_not_contains?: String;
  firstName_starts_with?: String;
  firstName_not_starts_with?: String;
  firstName_ends_with?: String;
  firstName_not_ends_with?: String;
  lastName?: String;
  lastName_not?: String;
  lastName_in?: String[] | String;
  lastName_not_in?: String[] | String;
  lastName_lt?: String;
  lastName_lte?: String;
  lastName_gt?: String;
  lastName_gte?: String;
  lastName_contains?: String;
  lastName_not_contains?: String;
  lastName_starts_with?: String;
  lastName_not_starts_with?: String;
  lastName_ends_with?: String;
  lastName_not_ends_with?: String;
  jobTitle?: String;
  jobTitle_not?: String;
  jobTitle_in?: String[] | String;
  jobTitle_not_in?: String[] | String;
  jobTitle_lt?: String;
  jobTitle_lte?: String;
  jobTitle_gt?: String;
  jobTitle_gte?: String;
  jobTitle_contains?: String;
  jobTitle_not_contains?: String;
  jobTitle_starts_with?: String;
  jobTitle_not_starts_with?: String;
  jobTitle_ends_with?: String;
  jobTitle_not_ends_with?: String;
  bio?: String;
  bio_not?: String;
  bio_in?: String[] | String;
  bio_not_in?: String[] | String;
  bio_lt?: String;
  bio_lte?: String;
  bio_gt?: String;
  bio_gte?: String;
  bio_contains?: String;
  bio_not_contains?: String;
  bio_starts_with?: String;
  bio_not_starts_with?: String;
  bio_ends_with?: String;
  bio_not_ends_with?: String;
  avatar?: String;
  avatar_not?: String;
  avatar_in?: String[] | String;
  avatar_not_in?: String[] | String;
  avatar_lt?: String;
  avatar_lte?: String;
  avatar_gt?: String;
  avatar_gte?: String;
  avatar_contains?: String;
  avatar_not_contains?: String;
  avatar_starts_with?: String;
  avatar_not_starts_with?: String;
  avatar_ends_with?: String;
  avatar_not_ends_with?: String;
  age?: Int;
  age_not?: Int;
  age_in?: Int[] | Int;
  age_not_in?: Int[] | Int;
  age_lt?: Int;
  age_lte?: Int;
  age_gt?: Int;
  age_gte?: Int;
  dateJoined?: DateTimeInput;
  dateJoined_not?: DateTimeInput;
  dateJoined_in?: DateTimeInput[] | DateTimeInput;
  dateJoined_not_in?: DateTimeInput[] | DateTimeInput;
  dateJoined_lt?: DateTimeInput;
  dateJoined_lte?: DateTimeInput;
  dateJoined_gt?: DateTimeInput;
  dateJoined_gte?: DateTimeInput;
  AND?: EmployeeWhereInput[] | EmployeeWhereInput;
  OR?: EmployeeWhereInput[] | EmployeeWhereInput;
  NOT?: EmployeeWhereInput[] | EmployeeWhereInput;
}

export interface EmployeeCreateInput {
  firstName: String;
  lastName: String;
  jobTitle: String;
  bio: String;
  avatar: String;
  age: Int;
  dateJoined: DateTimeInput;
}

export interface EmployeeUpdateInput {
  firstName?: String;
  lastName?: String;
  jobTitle?: String;
  bio?: String;
  avatar?: String;
  age?: Int;
  dateJoined?: DateTimeInput;
}

export interface EmployeeUpdateManyMutationInput {
  firstName?: String;
  lastName?: String;
  jobTitle?: String;
  bio?: String;
  avatar?: String;
  age?: Int;
  dateJoined?: DateTimeInput;
}

export interface EmployeeSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: EmployeeWhereInput;
  AND?: EmployeeSubscriptionWhereInput[] | EmployeeSubscriptionWhereInput;
  OR?: EmployeeSubscriptionWhereInput[] | EmployeeSubscriptionWhereInput;
  NOT?: EmployeeSubscriptionWhereInput[] | EmployeeSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Employee {
  id: ID_Output;
  firstName: String;
  lastName: String;
  jobTitle: String;
  bio: String;
  avatar: String;
  age: Int;
  dateJoined: DateTimeOutput;
}

export interface EmployeePromise extends Promise<Employee>, Fragmentable {
  id: () => Promise<ID_Output>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  jobTitle: () => Promise<String>;
  bio: () => Promise<String>;
  avatar: () => Promise<String>;
  age: () => Promise<Int>;
  dateJoined: () => Promise<DateTimeOutput>;
}

export interface EmployeeSubscription
  extends Promise<AsyncIterator<Employee>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  jobTitle: () => Promise<AsyncIterator<String>>;
  bio: () => Promise<AsyncIterator<String>>;
  avatar: () => Promise<AsyncIterator<String>>;
  age: () => Promise<AsyncIterator<Int>>;
  dateJoined: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface EmployeeConnection {
  pageInfo: PageInfo;
  edges: EmployeeEdge[];
}

export interface EmployeeConnectionPromise
  extends Promise<EmployeeConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<EmployeeEdge>>() => T;
  aggregate: <T = AggregateEmployeePromise>() => T;
}

export interface EmployeeConnectionSubscription
  extends Promise<AsyncIterator<EmployeeConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<EmployeeEdgeSubscription>>>() => T;
  aggregate: <T = AggregateEmployeeSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface EmployeeEdge {
  node: Employee;
  cursor: String;
}

export interface EmployeeEdgePromise
  extends Promise<EmployeeEdge>,
    Fragmentable {
  node: <T = EmployeePromise>() => T;
  cursor: () => Promise<String>;
}

export interface EmployeeEdgeSubscription
  extends Promise<AsyncIterator<EmployeeEdge>>,
    Fragmentable {
  node: <T = EmployeeSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateEmployee {
  count: Int;
}

export interface AggregateEmployeePromise
  extends Promise<AggregateEmployee>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateEmployeeSubscription
  extends Promise<AsyncIterator<AggregateEmployee>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface EmployeeSubscriptionPayload {
  mutation: MutationType;
  node: Employee;
  updatedFields: String[];
  previousValues: EmployeePreviousValues;
}

export interface EmployeeSubscriptionPayloadPromise
  extends Promise<EmployeeSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = EmployeePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = EmployeePreviousValuesPromise>() => T;
}

export interface EmployeeSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<EmployeeSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = EmployeeSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = EmployeePreviousValuesSubscription>() => T;
}

export interface EmployeePreviousValues {
  id: ID_Output;
  firstName: String;
  lastName: String;
  jobTitle: String;
  bio: String;
  avatar: String;
  age: Int;
  dateJoined: DateTimeOutput;
}

export interface EmployeePreviousValuesPromise
  extends Promise<EmployeePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  jobTitle: () => Promise<String>;
  bio: () => Promise<String>;
  avatar: () => Promise<String>;
  age: () => Promise<Int>;
  dateJoined: () => Promise<DateTimeOutput>;
}

export interface EmployeePreviousValuesSubscription
  extends Promise<AsyncIterator<EmployeePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  jobTitle: () => Promise<AsyncIterator<String>>;
  bio: () => Promise<AsyncIterator<String>>;
  avatar: () => Promise<AsyncIterator<String>>;
  age: () => Promise<AsyncIterator<Int>>;
  dateJoined: () => Promise<AsyncIterator<DateTimeOutput>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Employee",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/rick-c026d0/westpac-test/dev`
});
export const prisma = new Prisma();
