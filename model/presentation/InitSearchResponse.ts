import { Converter, ConverterItem } from "@common/Converter";
import { NendoMasterEntity } from "@common/model/master/NendoMasterEntity";
import { KamokuMasterEntity } from "@common/model/master/KamokuMasterEntity";
import { SaimokuMasterEntity } from "@common/model/master/SaimokuMasterEntity";
import { LedgerSearchResponse } from "@common/model/journal/LedgerSearchResponse";

export interface IInitSearchResponse {
  nendoList: NendoMasterEntity[];
  kamokuMasterList: KamokuMasterEntity[];
  saimokuMasterList: SaimokuMasterEntity[];
  ledgerList: LedgerSearchResponse[];
}

export class InitSearchResponse implements IInitSearchResponse {
  public nendoList: NendoMasterEntity[];
  public kamokuMasterList: KamokuMasterEntity[];
  public saimokuMasterList: SaimokuMasterEntity[];
  public ledgerList: LedgerSearchResponse[];

  constructor(
    initialValues: Partial<InitSearchResponse> | undefined = undefined
  ) {
    let values: any = {};
    if (initialValues != null) {
      values = initialValues;
    }
    this.nendoList = values.nendoList ?? [];
    this.kamokuMasterList = values.kamokuMasterList ?? [];
    this.saimokuMasterList = values.saimokuMasterList ?? [];
    this.ledgerList = values.ledgerList ?? [];
  }

  public static isValid(json: any) {
    const converter = new Converter<Partial<IInitSearchResponse>>();
    const { add } = converter;
    add("nendoList", ConverterItem.String, true, false);
    add("kamokuMasterList", ConverterItem.String, true, false);
    add("saimokuMasterList", ConverterItem.String, true, false);
    add("ledgerList", ConverterItem.String, true, false);
    return converter.convert(json);
  }
}
