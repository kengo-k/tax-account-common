import { Entity } from "@common/model/Entity";
import { Converter, ConverterItem } from "@common/Converter";

export interface IKamokuMasterEntity {
  id?: number | undefined;
  kamoku_cd: string;
  kamoku_full_name: string;
  kamoku_ryaku_name: string;
  kamoku_kana_name: string;
  kamoku_bunrui_cd: string;
  description?: string | undefined;
  created_at?: string | undefined;
  updated_at?: string | undefined;
}

export class KamokuMasterEntity extends Entity implements IKamokuMasterEntity {
  public id: number | undefined;
  public kamoku_cd: string;
  public kamoku_full_name: string;
  public kamoku_ryaku_name: string;
  public kamoku_kana_name: string;
  public kamoku_bunrui_cd: string;
  public description: string | undefined;
  public created_at: string | undefined;
  public updated_at: string | undefined;

  constructor(
    initialValues: Partial<IKamokuMasterEntity> | undefined = undefined
  ) {
    super();
    let values: any = {};
    if (initialValues != null) {
      values = initialValues;
    }
    this.id = values.id;
    this.kamoku_cd = values.kamoku_cd;
    this.kamoku_full_name = values.kamoku_full_name;
    this.kamoku_ryaku_name = values.kamoku_ryaku_name;
    this.kamoku_kana_name = values.kamoku_kana_name;
    this.kamoku_bunrui_cd = values.kamoku_bunrui_cd;
    this.description = values.description;
    this.created_at = values.created_at;
    this.updated_at = values.updated_at;
  }

  public static isValid(json: any) {
    const converter = new Converter<Partial<IKamokuMasterEntity>>();
    const { add } = converter;
    add("kamoku_cd", ConverterItem.String, true, false);
    add("kamoku_full_name", ConverterItem.String, true, false);
    add("kamoku_ryaku_name", ConverterItem.String, true, false);
    add("kamoku_kana_name", ConverterItem.Number, true, false);
    add("kamoku_bunrui_cd", ConverterItem.Number, true, false);
    add("description", ConverterItem.Number, true, false);
    return converter.convert(json);
  }
}
