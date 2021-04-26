import { Converter, ConverterItem } from "@common/Converter";

export interface IInitSearchRequest {
  nendo?: string;
  target_cd?: string;
}

export class InitSearchRequest implements IInitSearchRequest {
  public nendo: string | undefined;
  public target_cd: string | undefined;

  constructor(
    initialValues: Partial<IInitSearchRequest> | undefined = undefined
  ) {
    let values: any = {};
    if (initialValues != null) {
      values = initialValues;
    }
    this.nendo = values.nendo;
    this.target_cd = values.target_cd;
  }

  public static isValid(json: any) {
    const converter = new Converter<Partial<IInitSearchRequest>>();
    const { add } = converter;
    add("nendo", ConverterItem.String, false, false);
    add("target_cd", ConverterItem.String, false, false);
    return converter.convert(json);
  }
}
