import { Converter, ConverterItem } from "@/Converter";

export interface ITaxCalcRequest {
  nendo: string;
}

export class TaxCalcRequest implements ITaxCalcRequest {
  public nendo: string;
  constructor(initialValues: Partial<ITaxCalcRequest> | undefined = undefined) {
    let anyValues: any = {};
    if (initialValues != null) {
      anyValues = initialValues;
    }
    const values = anyValues as ITaxCalcRequest;
    this.nendo = values.nendo;
  }

  public static isValid(json: any) {
    const converter = new Converter<Partial<ITaxCalcRequest>>();
    const { add } = converter;
    add("nendo", ConverterItem.String, true, false);
    return converter.convert(json);
  }
}
