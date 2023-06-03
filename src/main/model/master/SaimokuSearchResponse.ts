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
    let anyValues: any = {};
    if (initialValues != null) {
      anyValues = initialValues;
    }
    const values = anyValues as ISaimokuSearchResponse;
    this.kamoku_cd = values.kamoku_cd;
    this.saimoku_cd = values.saimoku_cd;
    this.kamoku_bunrui_type = values.kamoku_bunrui_type;
  }
}
