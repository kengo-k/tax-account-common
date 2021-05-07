import { Converter, ConverterItem } from "@common/Converter";

export interface ILedgerCreateRequest {
  nendo: string;
  date: string;
  ledgerCd: string;
  anotherCd: string;
  karikataValue: number | null;
  kasikataValue: number | null;
  note?: string;
}

export class LedgerCreateRequest implements ILedgerCreateRequest {
  public nendo: string;
  public date: string;
  public ledgerCd: string;
  public anotherCd: string;
  public karikataValue: number | null;
  public kasikataValue: number | null;
  public note: string | undefined;
  constructor(
    initialValues: Partial<ILedgerCreateRequest> | undefined = undefined
  ) {
    let values: any = {};
    if (initialValues != null) {
      values = initialValues;
    }
    this.nendo = values.nendo;
    this.date = values.date;
    this.ledgerCd = values.ledgerCd;
    this.anotherCd = values.anotherCd;
    this.karikataValue = values.karikataValue;
    this.kasikataValue = values.kasikataValue;
    this.note = values.note;
  }

  public static isValid(json: any) {
    const converter = new Converter<Partial<ILedgerCreateRequest>>();
    const { add } = converter;
    add("nendo", ConverterItem.String, true, false);
    add("date", ConverterItem.String, true, false);
    add("ledgerCd", ConverterItem.String, true, false);
    add("anotherCd", ConverterItem.String, true, false);
    add("karikataValue", ConverterItem.Number, true, true);
    add("kasikataValue", ConverterItem.Number, true, true);
    add("note", ConverterItem.String, false, false);
    return converter.convert(json);
  }
}
