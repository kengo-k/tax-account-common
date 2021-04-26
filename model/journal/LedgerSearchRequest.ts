import { Converter, ConverterItem } from "@common/Converter";

export interface ILedgerSearchRequest {
  nendo: string;
  target_cd: string;
}

export class LedgerSearchRequest implements ILedgerSearchRequest {
  public nendo: string;
  public target_cd: string;
  constructor(
    initialValues: Partial<ILedgerSearchRequest> | undefined = undefined
  ) {
    let values: any = {};
    if (initialValues != null) {
      values = initialValues;
    }
    this.nendo = values.nendo;
    this.target_cd = values.target_cd;
  }

  public static isValid(json: any) {
    const converter = new Converter<Partial<ILedgerSearchRequest>>();
    const { add } = converter;
    add("nendo", ConverterItem.String, true, false);
    add("target_cd", ConverterItem.String, true, false);
    return converter.convert(json);
  }
}
