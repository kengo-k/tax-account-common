import { Entity } from "@common/model/Entity";
import { Converter, ConverterItem } from "@common/Converter";

export interface ISaimokuMasterEntity {
  id?: number | undefined;
  kamoku_cd: string;
  saimoku_cd: string;
  saimoku_full_name: string;
  saimoku_ryaku_name: string;
  saimoku_kana_name: string;
  description: string;
  created_at?: string | undefined;
  updated_at?: string | undefined;
}

export class SaimokuMasterEntity
  extends Entity
  implements ISaimokuMasterEntity {
  public id: number | undefined;
  public kamoku_cd: string;
  public saimoku_cd: string;
  public saimoku_full_name: string;
  public saimoku_ryaku_name: string;
  public saimoku_kana_name: string;
  public description: string;
  public created_at: string | undefined;
  public updated_at: string | undefined;

  constructor(
    initialValues: Partial<ISaimokuMasterEntity> | undefined = undefined
  ) {
    super();
    let values: any = {};
    if (initialValues != null) {
      values = initialValues;
    }
    this.id = values.id;
    this.kamoku_cd = values.kamoku_cd;
    this.saimoku_cd = values.saimoku_cd;
    this.saimoku_full_name = values.saimoku_full_name;
    this.saimoku_ryaku_name = values.saimoku_ryaku_name;
    this.saimoku_kana_name = values.saimoku_kana_name;
    this.description = values.description;
    this.created_at = values.created_at;
    this.updated_at = values.updated_at;
  }

  public static isValid(json: any) {
    const converter = new Converter<Partial<ISaimokuMasterEntity>>();
    const { add } = converter;
    add("nendo", ConverterItem.String, true, false);
    add("start_date", ConverterItem.String, true, false);
    add("end_date", ConverterItem.String, true, false);
    add("fixed", ConverterItem.Number, true, false);
    add("description", ConverterItem.Number, true, false);
    return converter.convert(json);
  }
}
