import { Converter, ConverterItem } from "@/Converter";

export interface ISaimokuSearchRequest {
  saimoku_cd: string;
}

export class SaimokuSearchRequest implements ISaimokuSearchRequest {
  public saimoku_cd: string;

  constructor(
    initialValues: Partial<ISaimokuSearchRequest> | undefined = undefined
  ) {
    let anyValues: any = {};
    if (initialValues != null) {
      anyValues = initialValues;
    }
    const values = anyValues as ISaimokuSearchRequest;
    this.saimoku_cd = values.saimoku_cd;
  }

  public static isValid(json: any) {
    const converter = new Converter<Partial<ISaimokuSearchRequest>>();
    const { add } = converter;
    add("saimoku_cd", ConverterItem.String, true, false);
    return converter.convert(json);
  }
}
