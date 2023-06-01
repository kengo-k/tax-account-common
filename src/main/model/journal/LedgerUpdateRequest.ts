import { Converter, ConverterItem } from "@common/Converter";

export interface ILedgerUpdateRequest {
  id: number;
  ledger_cd: string;
  other_cd: string;
  karikata_value: number | null;
  kasikata_value: number | null;
}

export class LedgerUpdateRequest implements ILedgerUpdateRequest {
  public id: number;
  public ledger_cd: string;
  public other_cd: string;
  public karikata_value: number | null;
  public kasikata_value: number | null;
  constructor(
    initialValues: Partial<ILedgerUpdateRequest> | undefined = undefined
  ) {
    let anyValues: any = {};
    if (initialValues != null) {
      anyValues = initialValues;
    }
    const values = anyValues as ILedgerUpdateRequest;
    this.id = values.id;
    this.ledger_cd = values.ledger_cd;
    this.other_cd = values.other_cd;
    this.karikata_value = values.karikata_value;
    this.kasikata_value = values.kasikata_value;
  }

  public static isValid(json: any) {
    const converter = new Converter<Partial<ILedgerUpdateRequest>>();
    const { add } = converter;
    add("id", ConverterItem.Number, true, false);
    add("ledger_cd", ConverterItem.String, true, false);
    add("other_cd", ConverterItem.String, false, false);
    add("karikata_value", ConverterItem.Number, false, true);
    add("kasikata_value", ConverterItem.Number, false, true);
    return converter.convert(json);
  }
}
