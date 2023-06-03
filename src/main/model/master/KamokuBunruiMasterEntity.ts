import { Entity } from "@/model/Entity";

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
  implements IKamokuBunruiMasterEntity
{
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
    let anyValues: any = {};
    if (initialValues != null) {
      anyValues = initialValues;
    }
    const values = anyValues as IKamokuBunruiMasterEntity;
    this.id = values.id;
    this.kamoku_bunrui_cd = values.kamoku_bunrui_cd;
    this.kamoku_bunrui_name = values.kamoku_bunrui_name;
    this.kamoku_bunrui_type = values.kamoku_bunrui_type;
    this.kurikoshi_flg = values.kurikoshi_flg;
    this.created_at = values.created_at;
    this.updated_at = values.updated_at;
  }
}
