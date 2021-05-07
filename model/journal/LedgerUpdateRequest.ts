import { Converter, ConverterItem } from "@common/Converter";

export interface ILedgerUpdateRequest {
  id: number;
  nendo: string;
  date?: string;
  ledger_cd: string;
  other_cd: string;
  karikata_value: number | null;
  kasikata_value: number | null;
  note?: string;
}

export class LedgerUpdateRequest implements ILedgerUpdateRequest {
  public id: number;
  public nendo: string;
  public date: string | undefined;
  public ledger_cd: string;
  public other_cd: string;
  public karikata_value: number | null;
  public kasikata_value: number | null;
  public note: string | undefined;
  constructor(
    initialValues: Partial<ILedgerUpdateRequest> | undefined = undefined
  ) {
    let anyValues: any = {};
    if (initialValues != null) {
      anyValues = initialValues;
    }
    const values = anyValues as ILedgerUpdateRequest;
    this.id = values.id;
    this.nendo = values.nendo;
    this.date = values.date;
    this.ledger_cd = values.ledger_cd;
    this.other_cd = values.other_cd;
    this.karikata_value = values.karikata_value;
    this.kasikata_value = values.kasikata_value;
    this.note = values.note;
  }

  public static isValid(json: any) {
    const converter = new Converter<Partial<ILedgerUpdateRequest>>();
    const { add } = converter;
    add("id", ConverterItem.Number, true, false);
    add("nendo", ConverterItem.String, true, true);
    add("date", ConverterItem.String, false, true);
    add("ledger_cd", ConverterItem.String, true, false);
    add("other_cd", ConverterItem.String, false, false);
    add("karikata_value", ConverterItem.Number, false, true);
    add("kasikata_value", ConverterItem.Number, false, true);
    add("note", ConverterItem.String, false, true);
    return converter.convert(json);
  }
}
