import { Converter, ConverterItem } from "@common/Converter";

export interface ILedgerSearchResponse {
  journal_id: string;
  nendo: string;
  date: string;
  another_cd: string;
  karikata_cd: string;
  karikata_value: number;
  kasikata_cd: string;
  kasikata_value: number;
  karikata_sum: number;
  kasikata_sum: number;
  acc: number;
}

export class LedgerSearchResponse implements ILedgerSearchResponse {
  public journal_id: string;
  public nendo: string;
  public date: string;
  public another_cd: string;
  public karikata_cd: string;
  public karikata_value: number;
  public kasikata_cd: string;
  public kasikata_value: number;
  public karikata_sum: number;
  public kasikata_sum: number;
  public acc: number;
  constructor(
    initialValues: Partial<LedgerSearchResponse> | undefined = undefined
  ) {
    let values: any = {};
    if (initialValues != null) {
      values = initialValues;
    }
    this.journal_id = values.journal_id;
    this.nendo = values.nendo;
    this.date = values.date;
    this.another_cd = values.another_cd;
    this.karikata_cd = values.karikata_cd;
    this.karikata_value = values.karikata_value;
    this.kasikata_cd = values.kasikata_cd;
    this.kasikata_value = values.kasikata_value;
    this.karikata_sum = values.karikata_sum;
    this.kasikata_sum = values.kasikata_sum;
    this.acc = values.acc;
  }

  public static isValid(json: any) {
    const converter = new Converter<Partial<LedgerSearchResponse>>();
    const { add } = converter;
    add("journal_id", ConverterItem.String, true, false);
    add("nendo", ConverterItem.String, true, false);
    add("date", ConverterItem.String, true, false);
    add("another_cd", ConverterItem.String, true, false);
    add("karikata_cd", ConverterItem.String, true, false);
    add("karikata_value", ConverterItem.String, true, false);
    add("kasikata_cd", ConverterItem.String, true, false);
    add("kasikata_value", ConverterItem.String, true, false);
    add("karikata_sum", ConverterItem.String, true, false);
    add("kasikata_sum", ConverterItem.String, true, false);
    add("acc", ConverterItem.Number, true, false);
    return converter.convert(json);
  }
}
