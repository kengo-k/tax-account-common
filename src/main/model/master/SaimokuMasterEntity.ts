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
    let anyValues: any = {};
    if (initialValues != null) {
      anyValues = initialValues;
    }
    const values = anyValues as ISaimokuMasterEntity;
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
}
