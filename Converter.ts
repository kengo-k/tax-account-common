type ConverterItemType = "string" | "number";
export interface ConverterItem {
  String: ConverterItemType;
  Number: ConverterItemType;
}
export const ConverterItem: ConverterItem = {
  String: "string",
  Number: "number",
};

type ConverterErrorMessageType = "not exist" | "required" | "type mismatch";
export interface ConverterErrorMessage {
  NotExist: ConverterErrorMessageType;
  Required: ConverterErrorMessageType;
  TypeMismatch: ConverterErrorMessageType;
}
export const ConverterErrorMessage: ConverterErrorMessage = {
  NotExist: "not exist",
  Required: "required",
  TypeMismatch: "type mismatch",
};

interface ConverterDef {
  name: string;
  type: ConverterItemType;
  required: boolean;
}

class ConvertCheckResult {
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
    const keys = [...Object.keys(json), ...Object.keys(this.converterDefs)];
    const checkedKey: any = {};
    for (const key of keys) {
      if (key in checkedKey) {
        continue;
      }
      if (!(key in this.converterDefs)) {
        result.errors.push([ConverterErrorMessage.NotExist, key]);
        checkedKey[key] = 1;
        continue;
      }
      const def = this.converterDefs[key];
      const value = json[key];
      if (value == null) {
        if (def.required) {
          result.errors.push([ConverterErrorMessage.Required, key]);
          checkedKey[key] = 1;
          continue;
        }
      } else {
        if (typeof value !== def.type) {
          result.errors.push([ConverterErrorMessage.TypeMismatch, key]);
          checkedKey[key] = 1;
          continue;
        }
      }
    }
    return result;
  }

  add = (name: string, type: ConverterItemType, required: boolean) => {
    this.converterDefs[name] = { name, type, required };
  };

  convert(json: any): T {
    if (this.isConvertible(json)) {
      return (json as any) as T;
    } else {
      throw new Error();
    }
  }
}
