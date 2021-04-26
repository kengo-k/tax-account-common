export class Entity {}

export enum EntitySearchType {
  StringEqual,
  StringLike,
}

export enum Order {
  Asc = "asc",
  Desc = "desc",
}

interface StringEqual {
  searchType: EntitySearchType.StringEqual;
  value: string;
}

interface StringLike {
  searchType: EntitySearchType.StringLike;
  value: string;
  before: boolean;
  after: boolean;
}

export type EntitySearchItem = StringEqual | StringLike;
export type EntitySearchCondition<T> = Partial<
  Record<keyof T, EntitySearchItem>
> & {
  orderBy?: [keyof T, Order][];
};
