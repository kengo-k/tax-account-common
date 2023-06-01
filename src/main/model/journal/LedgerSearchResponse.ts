import { Converter, ConverterItem } from "@common/Converter";

export interface ILedgerSearchResponse {
  journal_id: number;
  nendo: string;
  date: string;
  another_cd: string;
  karikata_cd: string;
  karikata_value: number;
  kasikata_cd: string;
  kasikata_value: number;
  karikata_sum: number;
  kasikata_sum: number;
  note: string;
  acc: number;
}

export class LedgerSearchResponse implements ILedgerSearchResponse {
  public journal_id: number;
  public nendo: string;
  public date: string;
  public another_cd: string;
  public karikata_cd: string;
  public karikata_value: number;
  public kasikata_cd: string;
  public kasikata_value: number;
  public karikata_sum: number;
  public kasikata_sum: number;
  public note: string;
  public acc: number;
  constructor(
    initialValues: Partial<LedgerSearchResponse> | undefined = undefined
  ) {
    let anyValues: any = {};
    if (initialValues != null) {
      anyValues = initialValues;
    }
    const values = anyValues as LedgerSearchResponse;
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
    this.note = values.note;
    this.acc = values.acc;
  }
}
