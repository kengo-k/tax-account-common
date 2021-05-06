import { Converter, ConverterItem } from "@common/Converter";

export interface ILedgerUpdateRequest {
  id: number;
  nendo?: string | undefined;
  date?: string | undefined;
  ledgerCd: string;
  anotherCd: string;
  karikataValue: number | undefined;
  kasikataValue: number | undefined;
  note?: string | undefined;
}

export class LedgerUpdateRequest implements ILedgerUpdateRequest {
  public id: number;
  public nendo?: string | undefined;
  public date?: string | undefined;
  public ledgerCd: string;
  public anotherCd: string;
  public karikataValue: number | undefined;
  public kasikataValue: number | undefined;
  public note?: string | undefined;
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
    add("id", ConverterItem.String, true, false);
    add("nendo", ConverterItem.String, true, true);
    add("date", ConverterItem.String, true, true);
    add("ledgerCd", ConverterItem.String, true, false);
    add("anotherCd", ConverterItem.String, true, false);
    add("karikataValue", ConverterItem.String, true, true);
    add("kasikataValue", ConverterItem.String, true, true);
    add("note", ConverterItem.String, true, true);
    return converter.convert(json);
  }
}
