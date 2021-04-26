import { Converter, ConverterItem } from "@common/Converter";

export interface ISaimokuSearchResponse {
  kamoku_cd: string;
  saimoku_cd: string;
  kamoku_bunrui_type: string;
}

export class SaimokuSearchResponse implements ISaimokuSearchResponse {
  public kamoku_cd: string;
  public saimoku_cd: string;
  public kamoku_bunrui_type: string;

  constructor(
    initialValues: Partial<ISaimokuSearchResponse> | undefined = undefined
  ) {
    let values: any = {};
    if (initialValues != null) {
      values = initialValues;
    }
    this.kamoku_cd = values.kamoku_cd;
    this.saimoku_cd = values.saimoku_cd;
    this.kamoku_bunrui_type = values.kamoku_bunrui_type;
  }

  public static isValid(json: any) {
    const converter = new Converter<Partial<ISaimokuSearchResponse>>();
    const { add } = converter;
    add("kamoku_cd", ConverterItem.String, true, false);
    add("saimoku_cd", ConverterItem.String, true, false);
    add("kamoku_bunrui_type", ConverterItem.String, true, false);
    return converter.convert(json);
  }
}
