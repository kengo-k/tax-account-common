import { Converter, ConverterItem } from "@common/Converter";

export interface IJournalSearchRequest {
  nendo: string;
}

export class JournalSearchRequest implements IJournalSearchRequest {
  public nendo: string;
  constructor(
    initialValues: Partial<IJournalSearchRequest> | undefined = undefined
  ) {
    let anyValues: any = {};
    if (initialValues != null) {
      anyValues = initialValues;
    }
    const values = anyValues as IJournalSearchRequest;
    this.nendo = values.nendo;
  }

  public static isValid(json: any) {
    const converter = new Converter<Partial<IJournalSearchRequest>>();
    const { add } = converter;
    add("nendo", ConverterItem.String, true, false);
    return converter.convert(json);
  }
}
