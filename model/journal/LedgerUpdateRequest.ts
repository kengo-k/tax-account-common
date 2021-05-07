import { Converter, ConverterItem } from "@common/Converter";

export interface ILedgerUpdateRequest {
  id: number;
  nendo: string;
  date?: string;
  ledgerCd: string;
  anotherCd: string;
  karikataValue: number | null;
  kasikataValue: number | null;
  note?: string;
}

export class LedgerUpdateRequest implements ILedgerUpdateRequest {
  public id: number;
  public nendo: string;
  public date: string | undefined;
  public ledgerCd: string;
  public anotherCd: string;
  public karikataValue: number | null;
  public kasikataValue: number | null;
  public note: string | undefined;
  constructor(
    initialValues: Partial<ILedgerUpdateRequest> | undefined = undefined
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
    const converter = new Converter<Partial<ILedgerUpdateRequest>>();
    const { add } = converter;
    add("id", ConverterItem.Number, true, false);
    add("nendo", ConverterItem.String, true, true);
    add("date", ConverterItem.String, false, true);
    add("ledgerCd", ConverterItem.String, true, false);
    add("anotherCd", ConverterItem.String, false, false);
    add("karikataValue", ConverterItem.Number, false, true);
    add("kasikataValue", ConverterItem.Number, false, true);
    add("note", ConverterItem.String, false, true);
    return converter.convert(json);
  }
}
