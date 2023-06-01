import { Converter, ConverterItem } from "@/Converter";

export interface ILedgerCreateRequest {
  nendo: string;
  date: string;
  ledger_cd: string;
  other_cd: string;
  karikata_value: number | null;
  kasikata_value: number | null;
  note?: string;
}

export class LedgerCreateRequest implements ILedgerCreateRequest {
  public nendo: string;
  public date: string;
  public ledger_cd: string;
  public other_cd: string;
  public karikata_value: number | null;
  public kasikata_value: number | null;
  public note: string | undefined;
  constructor(
    initialValues: Partial<ILedgerCreateRequest> | undefined = undefined
  ) {
    let anyValues: any = {};
    if (initialValues != null) {
      anyValues = initialValues;
    }
    const values = anyValues as ILedgerCreateRequest;
    this.nendo = values.nendo;
    this.date = values.date;
    this.ledger_cd = values.ledger_cd;
    this.other_cd = values.other_cd;
    this.karikata_value = values.karikata_value;
    this.kasikata_value = values.kasikata_value;
    this.note = values.note;
  }

  public static isValid(json: any) {
    const converter = new Converter<Partial<ILedgerCreateRequest>>();
    const { add } = converter;
    add("nendo", ConverterItem.String, true, false);
    add("date", ConverterItem.String, true, false);
    add("ledger_cd", ConverterItem.String, true, false);
    add("other_cd", ConverterItem.String, true, false);
    add("karikata_value", ConverterItem.Number, true, true);
    add("kasikata_value", ConverterItem.Number, true, true);
    add("note", ConverterItem.String, false, false);
    return converter.convert(json);
  }
}
