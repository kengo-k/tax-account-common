import { Converter, ConverterItem } from "@common/Converter";

export interface ITaxCalcResponse {
  sales: number;
  expenses: number;
  income: number;
  incomeUnder800: number;
  incomeOver800: number;
  cotaxBaseUnder800: number;
  cotaxBaseOver800: number;
  cotaxRateUnder800: number;
  cotaxRateOver800: number;
  cotaxBase: number;
  cotaxDeduction: number;
  cotax: number;
  fixedCotax: number;
  localCotaxBase: number;
  localCotaxRate: number;
  localCotax: number;
  fixedLocalCotax: number;
  municipalTaxBase: number;
  municipalTaxRate: number;
  municipalTax: number;
  fixedMunicipalTax: number;
  bizTaxBase: number;
  bizTaxRate: number;
  bizTax: number;
  fixedBizTax: number;
  specialLocalCotaxBase: number;
  specialLocalCotaxRate: number;
  specialLocalCotax: number;
  fixedSpecialLocalCotax: number;
}

export class TaxCalcResponse implements ITaxCalcResponse {
  public sales: number;
  public expenses: number;
  public income: number;
  public incomeUnder800: number;
  public incomeOver800: number;
  public cotaxBaseUnder800: number;
  public cotaxBaseOver800: number;
  public cotaxRateUnder800: number;
  public cotaxRateOver800: number;
  public cotaxBase: number;
  public cotaxDeduction: number;
  public cotax: number;
  public fixedCotax: number;
  public localCotaxBase: number;
  public localCotaxRate: number;
  public localCotax: number;
  public fixedLocalCotax: number;
  public municipalTaxBase: number;
  public municipalTaxRate: number;
  public municipalTax: number;
  public fixedMunicipalTax: number;
  public bizTaxBase: number;
  public bizTaxRate: number;
  public bizTax: number;
  public fixedBizTax: number;
  public specialLocalCotaxBase: number;
  public specialLocalCotaxRate: number;
  public specialLocalCotax: number;
  public fixedSpecialLocalCotax: number;
  constructor(
    initialValues: Partial<ITaxCalcResponse> | undefined = undefined
  ) {
    let anyValues: any = {};
    if (initialValues != null) {
      anyValues = initialValues;
    }
    const values = anyValues as ITaxCalcResponse;
    this.sales = values.sales;
    this.expenses = values.expenses;
    this.income = values.income;
    this.incomeUnder800 = values.incomeUnder800;
    this.incomeOver800 = values.incomeOver800;
    this.cotaxBaseUnder800 = values.cotaxBaseUnder800;
    this.cotaxBaseOver800 = values.cotaxBaseOver800;
    this.cotaxRateUnder800 = values.cotaxRateUnder800;
    this.cotaxRateOver800 = values.cotaxRateOver800;
    this.cotaxBase = values.cotaxBase;
    this.cotaxDeduction = values.cotaxDeduction;
    this.cotax = values.cotax;
    this.fixedCotax = values.fixedCotax;
    this.localCotaxBase = values.localCotaxBase;
    this.localCotaxRate = values.localCotaxRate;
    this.localCotax = values.localCotax;
    this.fixedLocalCotax = values.fixedLocalCotax;
    this.municipalTaxBase = values.municipalTaxBase;
    this.municipalTaxRate = values.municipalTaxRate;
    this.municipalTax = values.municipalTax;
    this.fixedMunicipalTax = values.fixedMunicipalTax;
    this.bizTaxBase = values.bizTaxBase;
    this.bizTaxRate = values.bizTaxRate;
    this.bizTax = values.bizTax;
    this.fixedBizTax = values.fixedBizTax;
    this.specialLocalCotaxBase = values.specialLocalCotaxBase;
    this.specialLocalCotaxRate = values.specialLocalCotaxRate;
    this.specialLocalCotax = values.specialLocalCotax;
    this.fixedSpecialLocalCotax = values.fixedSpecialLocalCotax;
  }
}
