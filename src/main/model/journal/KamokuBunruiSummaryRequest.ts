import { Converter, ConverterItem } from "@/Converter";

export interface IKamokuBunruiSummaryRequest {
  nendo: string;
  kamoku_bunrui_cd: string;
}

export class KamokuBunruiSummaryRequest implements IKamokuBunruiSummaryRequest {
  public nendo: string;
  public kamoku_bunrui_cd: string;
  constructor(
    initialValues: Partial<IKamokuBunruiSummaryRequest> | undefined = undefined
  ) {
    let anyValues: any = {};
    if (initialValues != null) {
      anyValues = initialValues;
    }
    const values = anyValues as IKamokuBunruiSummaryRequest;
    this.nendo = values.nendo;
    this.kamoku_bunrui_cd = values.kamoku_bunrui_cd;
  }

  public static isValid(json: any) {
    const converter = new Converter<Partial<IKamokuBunruiSummaryRequest>>();
    const { add } = converter;
    add("nendo", ConverterItem.String, true, false);
    add("kamoku_bunrui_cd", ConverterItem.String, true, false);
    return converter.convert(json);
  }
}
