export interface IJournalEntity {
  id?: number | undefined;
  nendo: string;
  date: string;
  karikata_cd: string;
  karikata_value: number;
  kasikata_cd: string;
  kasikata_value: number;
  note?: string | undefined;
  checked: string;
  created_at?: string | undefined;
  updated_at?: string | undefined;
}

export class JournalEntity implements IJournalEntity {
  public id: number | undefined;
  public nendo: string;
  public date: string;
  public karikata_cd: string;
  public karikata_value: number;
  public kasikata_cd: string;
  public kasikata_value: number;
  public note: string | undefined;
  public checked: string;
  public created_at: string | undefined;
  public updated_at: string | undefined;
  constructor(initialValues: IJournalEntity | undefined) {
    let values: any = {};
    if (initialValues != null) {
      values = initialValues;
    }
    this.id = values.id;
    this.nendo = values.nendo;
    this.date = values.date;
    this.karikata_cd = values.karikata_cd;
    this.karikata_value = values.karikata_value;
    this.kasikata_cd = values.kasikata_cd;
    this.kasikata_value = values.kasikata_value;
    this.checked = values.checked;
    this.created_at = values.created_at;
    this.updated_at = values.updated_at;
  }
}
