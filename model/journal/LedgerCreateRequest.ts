import { Converter, ConverterItem } from "@common/Converter";

export interface ILedgerCreateRequest {
  id: number | undefined;
  nendo: string;
  date: string;
  ledgerCd: string;
  anotherCd: string;
  karikataValue: number | undefined;
  kasikataValue: number | undefined;
  note: string;
}

export class LedgerCreateRequest implements ILedgerCreateRequest {
  public id: number | undefined;
  public nendo: string;
  public date: string;
  public ledgerCd: string;
  public anotherCd: string;
  public karikataValue: number | undefined;
  public kasikataValue: number | undefined;
  public note: string;
  constructor(
    initialValues: Partial<ILedgerCreateRequest> | undefined = undefined
  ) {
    let values: any = {};
    if (initialValues != null) {
      values = initialValues;
    }
    this.id = values.id;
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
    add("id", ConverterItem.String, true, true);
    add("nendo", ConverterItem.String, true, false);
    add("date", ConverterItem.String, true, false);
    add("ledgerCd", ConverterItem.String, true, false);
    add("anotherCd", ConverterItem.String, true, false);
    add("karikataValue", ConverterItem.String, true, true);
    add("kasikataValue", ConverterItem.String, true, true);
    add("note", ConverterItem.String, true, true);
    return converter.convert(json);
  }
}
