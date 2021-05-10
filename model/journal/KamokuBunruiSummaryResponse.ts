export interface IKamokuBunruiSummaryResponse {
  karikata_kamoku_bunrui_sum: number;
  kasikata_kamoku_bunrui_sum: number;
  value: number;
}

export class KamokuBunruiSummaryResponse
  implements IKamokuBunruiSummaryResponse {
  public karikata_kamoku_bunrui_sum: number;
  public kasikata_kamoku_bunrui_sum: number;
  public value: number;
  constructor(
    initialValues: Partial<IKamokuBunruiSummaryResponse> | undefined = undefined
  ) {
    let anyValues: any = {};
    if (initialValues != null) {
      anyValues = initialValues;
    }
    const values = anyValues as IKamokuBunruiSummaryResponse;
    this.karikata_kamoku_bunrui_sum = values.karikata_kamoku_bunrui_sum;
    this.kasikata_kamoku_bunrui_sum = values.kasikata_kamoku_bunrui_sum;
    this.value = values.value;
  }
}
