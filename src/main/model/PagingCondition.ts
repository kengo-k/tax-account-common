import { Converter, ConverterItem } from "@/Converter";

export interface IPagingRequest {
  // 現在のページ番号
  page_no?: number;
  // 1ページあたりの表示件数
  page_size?: number;
}

export class PagingRequest implements IPagingRequest {
  public page_no: number | undefined;
  public page_size: number | undefined;
  constructor(initialValues: Partial<IPagingRequest> | undefined = undefined) {
    let anyValues: any = {};
    if (initialValues != null) {
      anyValues = initialValues;
    }
    const values = anyValues as IPagingRequest;
    this.page_no = values.page_no;
    this.page_size = values.page_size;
  }

  public get offSet() {
    if (this.page_no == null || this.page_size == null) {
      return 0;
    }
    return (this.page_no - 1) * this.page_size;
  }

  public static addValidator(add: Converter<Partial<IPagingRequest>>["add"]) {
    add("page_no", ConverterItem.Number, false, false);
    add("page_size", ConverterItem.Number, false, false);
  }
}

export interface IPagingResponse {
  // 全データ件数
  all_count: number;
  // 何件目から
  from_count: number;
  // 何件目まで
  to_count: number;
  // ページ数
  page_count: number;
}

export class PagingResponse implements IPagingResponse {
  public all_count: number;
  public from_count: number;
  public to_count: number;
  public page_count: number;
  constructor(initialValues: Partial<IPagingResponse> | undefined = undefined) {
    let anyValues: any = {};
    if (initialValues != null) {
      anyValues = initialValues;
    }
    const values = anyValues as IPagingResponse;
    this.all_count = values.all_count;
    this.from_count = values.from_count;
    this.to_count = values.to_count;
    this.page_count = values.page_count;
  }
}
