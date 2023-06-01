import { Converter, ConverterItem } from "@/Converter";

export interface ISummaryRequest {
  nendo: string;
}

export class SummaryRequest implements ISummaryRequest {
  public nendo: string;

  constructor(initialValues: Partial<ISummaryRequest> | undefined = undefined) {
    let anyValues: any = {};
    if (initialValues != null) {
      anyValues = initialValues;
    }
    const values = anyValues as ISummaryRequest;
    this.nendo = values.nendo;
  }

  public static isValid(json: any) {
    const converter = new Converter<Partial<ISummaryRequest>>();
    const { add } = converter;
    add("nendo", ConverterItem.String, true, false);
    return converter.convert(json);
  }
}
