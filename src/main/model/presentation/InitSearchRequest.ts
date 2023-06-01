import { Converter, ConverterItem } from "@common/Converter";

export interface IInitSearchRequest {
  nendo?: string;
  ledger_cd?: string;
}

export class InitSearchRequest implements IInitSearchRequest {
  public nendo: string | undefined;
  public ledger_cd: string | undefined;

  constructor(
    initialValues: Partial<IInitSearchRequest> | undefined = undefined
  ) {
    let anyValues: any = {};
    if (initialValues != null) {
      anyValues = initialValues;
    }
    const values = anyValues as IInitSearchRequest;
    this.nendo = values.nendo;
    this.ledger_cd = values.ledger_cd;
  }

  public static isValid(json: any) {
    const converter = new Converter<Partial<IInitSearchRequest>>();
    const { add } = converter;
    add("nendo", ConverterItem.String, false, false);
    add("ledger_cd", ConverterItem.String, false, false);
    return converter.convert(json);
  }
}
