const uniq = require("lodash/uniq");
import {
  EntitySearchType,
  Eq,
  LtE,
  Lt,
  GtE,
  Gt,
  Between,
  Like,
} from "@common/model/Entity";

export enum ConverterItem {
  String,
  Number,
  Boolean,
  EntitySearchItem,
}

type ConverterErrorMessageType =
  | "not exist"
  | "required"
  | "type mismatch"
  | "null"
  | "invalid convert type"
  | "invalid search type";

export interface ConverterErrorMessage {
  NotExist: ConverterErrorMessageType;
  Required: ConverterErrorMessageType;
  TypeMismatch: ConverterErrorMessageType;
  Null: ConverterErrorMessageType;
  InvalidConvertType: ConverterErrorMessageType;
  InvalidSearchType: ConverterErrorMessageType;
}
export const ConverterErrorMessage: ConverterErrorMessage = {
  NotExist: "not exist",
  Required: "required",
  TypeMismatch: "type mismatch",
  Null: "null",
  InvalidConvertType: "invalid convert type",
  InvalidSearchType: "invalid search type",
};

interface ConverterDef<T> {
  name: keyof T;
  type: ConverterItem;
  required: boolean;
  allowNull: boolean;
}

export class ConvertCheckResult {
  errors: [ConverterErrorMessageType, string][];
  public constructor() {
    this.errors = [];
  }
  public isConvertible() {
    return this.errors.length === 0;
  }
  public getError() {
    const error: any = {};
    for (const [type, key] of this.errors) {
      error[key] = type;
    }
    return error;
  }
}

export class Converter<T> {
  converterDefs: { [name: string]: ConverterDef<T> };
  constructor() {
    this.converterDefs = {};
  }

  isConvertible(json: any): ConvertCheckResult {
    const result = new ConvertCheckResult();
    const keys = uniq([
      ...Object.keys(json),
      ...Object.keys(this.converterDefs),
    ]);
    for (const key of keys) {
      // jsonにdefsに定義されていないキーが存在した場合はエラー
      if (!(key in this.converterDefs)) {
        result.errors.push([ConverterErrorMessage.NotExist, key]);
        continue;
      }
      const def = this.converterDefs[key];
      const value = json[key];
      if (value === undefined) {
        if (def.required) {
          result.errors.push([ConverterErrorMessage.Required, key]);
          continue;
        }
      } else if (value === null) {
        if (!def.allowNull) {
          result.errors.push([ConverterErrorMessage.Null, key]);
          continue;
        }
      } else {
        if (def.type === ConverterItem.Number) {
          if (typeof value !== "number") {
            if (!(typeof value === "string" && value === `${Number(value)}`)) {
              result.errors.push([ConverterErrorMessage.TypeMismatch, key]);
              continue;
            }
          }
        } else if (def.type === ConverterItem.String) {
          if (typeof value !== "string") {
            result.errors.push([ConverterErrorMessage.TypeMismatch, key]);
            continue;
          }
        } else if (def.type === ConverterItem.Boolean) {
          if (typeof value !== "boolean") {
            if (
              !(typeof value === "string" && ["true", "false"].includes(value))
            ) {
              result.errors.push([ConverterErrorMessage.TypeMismatch, key]);
              continue;
            } else {
              if (value === "true") {
                json[key] = true;
              } else {
                json[key] = false;
              }
            }
          }
        } else if (def.type === ConverterItem.EntitySearchItem) {
          const searchTypeKey = "searchType";
          if (searchTypeKey in value) {
            const searchType = value[searchTypeKey];
            if (
              [
                EntitySearchType.Eq,
                EntitySearchType.LtE,
                EntitySearchType.Lt,
                EntitySearchType.GtE,
                EntitySearchType.Gt,
              ].includes(searchType)
            ) {
              const typedValue = value as any as Eq;
              const key = "value";
              if (typedValue.value == null) {
                result.errors.push([ConverterErrorMessage.Null, key]);
                continue;
              } else if (
                !["string", "number"].includes(typeof typedValue.value)
              ) {
                result.errors.push([ConverterErrorMessage.TypeMismatch, key]);
                continue;
              }
            } else if (searchType === EntitySearchType.Between) {
              const typedValue = value as any as Between;
              const key = "fromTo";
              if (typedValue.fromTo == null) {
                result.errors.push([ConverterErrorMessage.Null, key]);
                continue;
              } else if (
                !Array.isArray(typedValue.fromTo) ||
                typedValue.fromTo.length != 2 ||
                !["string", "number"].includes(typeof typedValue.fromTo[0]) ||
                typeof typedValue.fromTo[0] !== typeof typedValue.fromTo[1]
              ) {
                result.errors.push([ConverterErrorMessage.TypeMismatch, key]);
                continue;
              }
            } else if (searchType === EntitySearchType.Like) {
              const typedValue = value as any as Like;
              const key = "value";
              if (typedValue.value == null) {
                result.errors.push([ConverterErrorMessage.Null, key]);
                continue;
              } else if (typeof typedValue.value !== "string") {
                result.errors.push([ConverterErrorMessage.TypeMismatch, key]);
                continue;
              }
              if (
                typedValue.before != null &&
                typeof typedValue.before !== "boolean"
              ) {
                result.errors.push([
                  ConverterErrorMessage.TypeMismatch,
                  "before",
                ]);
                continue;
              }
              if (
                typedValue.after != null &&
                typeof typedValue.after !== "boolean"
              ) {
                result.errors.push([
                  ConverterErrorMessage.TypeMismatch,
                  "after",
                ]);
                continue;
              }
            } else {
              result.errors.push([
                ConverterErrorMessage.InvalidSearchType,
                searchTypeKey,
              ]);
              continue;
            }
          } else {
            result.errors.push([ConverterErrorMessage.Null, searchTypeKey]);
            continue;
          }
        } else {
          result.errors.push([
            ConverterErrorMessage.InvalidConvertType,
            "type",
          ]);
          continue;
        }
      }
    }
    return result;
  }

  add = (
    name: keyof T,
    type: ConverterItem,
    required: boolean,
    allowNull: boolean
  ) => {
    this.converterDefs[name as string] = { name, type, required, allowNull };
  };

  convert(json: any): [T | undefined, ConvertCheckResult] {
    const result = this.isConvertible(json);
    if (result.errors.length === 0) {
      return [json as any as T, result];
    } else {
      return [undefined, result];
    }
  }
}
