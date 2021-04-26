import { Entity } from "@common/model/Entity";
import { Converter, ConverterItem } from "@common/Converter";

export interface INendoMasterEntity {
  id?: number | undefined;
  nendo: string;
  start_date: string;
  end_date: string;
  fixed: string;
  created_at?: string | undefined;
  updated_at?: string | undefined;
}

export class NendoMasterEntity extends Entity implements INendoMasterEntity {
  public id: number | undefined;
  public nendo: string;
  public start_date: string;
  public end_date: string;
  public fixed: string;
  public created_at: string | undefined;
  public updated_at: string | undefined;

  constructor(
    initialValues: Partial<INendoMasterEntity> | undefined = undefined
  ) {
    super();
    let values: any = {};
    if (initialValues != null) {
      values = initialValues;
    }
    this.id = values.id;
    this.nendo = values.nendo;
    this.start_date = values.start_date;
    this.end_date = values.end_date;
    this.fixed = values.fixed;
    this.created_at = values.created_at;
    this.updated_at = values.updated_at;
  }

  public static isValid(json: any) {
    const converter = new Converter<Partial<INendoMasterEntity>>();
    const { add } = converter;
    add("nendo", ConverterItem.String, true, false);
    add("start_date", ConverterItem.String, true, false);
    add("end_date", ConverterItem.String, true, false);
    add("fixed", ConverterItem.Number, true, false);
    add("description", ConverterItem.Number, true, false);
    return converter.convert(json);
  }
}
