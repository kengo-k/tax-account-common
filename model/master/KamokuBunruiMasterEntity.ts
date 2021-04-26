import { Entity } from "@common/model/Entity";
import { Converter, ConverterItem } from "@common/Converter";

export interface IKamokuBunruiMasterEntity {
  id?: number | undefined;
  kamoku_bunrui_cd: string;
  kamoku_bunrui_name: string;
  kamoku_bunrui_type: string;
  kurikoshi_flg: string;
  created_at?: string | undefined;
  updated_at?: string | undefined;
}

export class KamokuBunruiMasterEntity
  extends Entity
  implements IKamokuBunruiMasterEntity {
  public id: number | undefined;
  public kamoku_bunrui_cd: string;
  public kamoku_bunrui_name: string;
  public kamoku_bunrui_type: string;
  public kurikoshi_flg: string;
  public created_at: string | undefined;
  public updated_at: string | undefined;

  constructor(
    initialValues: Partial<IKamokuBunruiMasterEntity> | undefined = undefined
  ) {
    super();
    let values: any = {};
    if (initialValues != null) {
      values = initialValues;
    }
    this.id = values.id;
    this.kamoku_bunrui_cd = values.kamoku_bunrui_cd;
    this.kamoku_bunrui_name = values.kamoku_bunrui_name;
    this.kamoku_bunrui_type = values.kamoku_bunrui_type;
    this.kurikoshi_flg = values.kurikoshi_flg;
    this.created_at = values.created_at;
    this.updated_at = values.updated_at;
  }

  public static isValid(json: any) {
    const converter = new Converter<Partial<IKamokuBunruiMasterEntity>>();
    const { add } = converter;
    add("kamoku_bunrui_cd", ConverterItem.String, true, false);
    add("kamoku_bunrui_name", ConverterItem.String, true, false);
    add("kamoku_bunrui_type", ConverterItem.String, true, false);
    add("kurikoshi_flg", ConverterItem.Number, true, false);
    return converter.convert(json);
  }
}
