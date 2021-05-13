import { Converter, ConverterItem } from "@common/Converter";

export interface IJournalSearchRequest {
  nendo: string;
  date_from?: string;
  date_to?: string;
  latest_order?: boolean; // 更新日の降順で取得する。falseの場合は昇順
  largest_order?: boolean; // 金額の降順で取得する。falseの場合は昇順
}

export class JournalSearchRequest implements IJournalSearchRequest {
  public nendo: string;
  public date_from: string | undefined;
  public date_to: string | undefined;
  public latest_order: boolean | undefined;
  public largest_order: boolean | undefined;
  constructor(
    initialValues: Partial<IJournalSearchRequest> | undefined = undefined
  ) {
    let anyValues: any = {};
    if (initialValues != null) {
      anyValues = initialValues;
    }
    const values = anyValues as IJournalSearchRequest;
    this.nendo = values.nendo;
    this.date_from = values.date_from;
    this.date_to = values.date_to;
    this.latest_order = values.latest_order;
    this.largest_order = values.largest_order;
  }

  public static isValid(json: any) {
    const converter = new Converter<Partial<IJournalSearchRequest>>();
    const { add } = converter;
    add("nendo", ConverterItem.String, true, false);
    add("date_from", ConverterItem.String, false, false);
    add("date_to", ConverterItem.String, false, false);
    add("latest_order", ConverterItem.Boolean, false, false);
    add("largest_order", ConverterItem.Boolean, false, false);
    return converter.convert(json);
  }
}
