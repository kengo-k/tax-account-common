export class Entity {}

export enum EntitySearchType {
  Eq,
  LtE,
  Lt,
  GtE,
  Gt,
  Between,
  Like,
}

export enum Order {
  Asc = "asc",
  Desc = "desc",
}

export interface Eq {
  searchType: EntitySearchType.Eq;
  value: string | number;
}

export interface LtE {
  searchType: EntitySearchType.LtE;
  value: string | number;
}

export interface Lt {
  searchType: EntitySearchType.Lt;
  value: string | number;
}

export interface GtE {
  searchType: EntitySearchType.GtE;
  value: string | number;
}

export interface Gt {
  searchType: EntitySearchType.Gt;
  value: string | number;
}

export interface Between {
  searchType: EntitySearchType.Between;
  fromTo: [string, string] | [number, number];
}

export interface Like {
  searchType: EntitySearchType.Like;
  value: string;
  before: boolean;
  after: boolean;
}

export type EntitySearchItem = Eq | LtE | Lt | GtE | Gt | Between | Like;
export type EntitySearchCondition<T> = Partial<
  Record<keyof T, EntitySearchItem>
> & {
  orderBy?: [keyof T, Order][];
};
