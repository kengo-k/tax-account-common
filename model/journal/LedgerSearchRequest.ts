import { Converter, ConverterItem } from "@common/Converter";

export interface ILedgerSearchRequest {
  nendo: string;
  ledger_cd: string;
}

export class LedgerSearchRequest implements ILedgerSearchRequest {
  public nendo: string;
  public ledger_cd: string;
  constructor(
    initialValues: Partial<ILedgerSearchRequest> | undefined = undefined
  ) {
    let anyValues: any = {};
    if (initialValues != null) {
      anyValues = initialValues;
    }
    const values = anyValues as ILedgerSearchRequest;
    this.nendo = values.nendo;
    this.ledger_cd = values.ledger_cd;
  }

  public static isValid(json: any) {
    const converter = new Converter<Partial<ILedgerSearchRequest>>();
    const { add } = converter;
    add("nendo", ConverterItem.String, true, false);
    add("ledger_cd", ConverterItem.String, true, false);
    return converter.convert(json);
  }
}
