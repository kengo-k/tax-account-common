const uniq = require("lodash/uniq");

type ConverterItemType = "string" | "number";
export interface ConverterItem {
  String: ConverterItemType;
  Number: ConverterItemType;
}
export const ConverterItem: ConverterItem = {
  String: "string",
  Number: "number",
};

type ConverterErrorMessageType =
  | "not exist"
  | "required"
  | "type mismatch"
  | "null";

export interface ConverterErrorMessage {
  NotExist: ConverterErrorMessageType;
  Required: ConverterErrorMessageType;
  TypeMismatch: ConverterErrorMessageType;
  Null: ConverterErrorMessageType;
}
export const ConverterErrorMessage: ConverterErrorMessage = {
  NotExist: "not exist",
  Required: "required",
  TypeMismatch: "type mismatch",
  Null: "null",
};

interface ConverterDef {
  name: string;
  type: ConverterItemType;
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
  converterDefs: { [name: string]: ConverterDef };
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
        }
      } else {
        if (typeof value !== def.type) {
          result.errors.push([ConverterErrorMessage.TypeMismatch, key]);
          continue;
        }
      }
    }
    return result;
  }

  add = (
    name: string,
    type: ConverterItemType,
    required: boolean,
    allowNull: boolean
  ) => {
    this.converterDefs[name] = { name, type, required, allowNull };
  };

  convert(json: any): [T | undefined, ConvertCheckResult] {
    const result = this.isConvertible(json);
    if (result.errors.length === 0) {
      return [(json as any) as T, result];
    } else {
      return [undefined, result];
    }
  }
}
