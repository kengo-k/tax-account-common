export interface ISummaryResponse {
  sales: number;
  expenses: number;
}

export class SummaryResponse implements ISummaryResponse {
  public sales: number;
  public expenses: number;

  constructor(
    initialValues: Partial<ISummaryResponse> | undefined = undefined
  ) {
    let anyValues: any = {};
    if (initialValues != null) {
      anyValues = initialValues;
    }
    const values = anyValues as ISummaryResponse;
    this.sales = values.sales;
    this.expenses = values.expenses;
  }
}
