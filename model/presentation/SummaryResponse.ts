import { ITaxCalcResponse } from "@common/model/journal/TaxCalcResponse";

export interface ISummaryResponse {
  sales: number;
  expenses: number;
  tax: ITaxCalcResponse | undefined;
}

export class SummaryResponse implements ISummaryResponse {
  public sales: number;
  public expenses: number;
  public tax: ITaxCalcResponse | undefined;

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
    this.tax = values.tax;
  }
}
