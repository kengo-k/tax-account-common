import { LedgerSearchResponse } from "@/model/journal/LedgerSearchResponse";
import { KamokuMasterEntity } from "@/model/master/KamokuMasterEntity";
import { NendoMasterEntity } from "@/model/master/NendoMasterEntity";
import { SaimokuMasterEntity } from "@/model/master/SaimokuMasterEntity";

export interface IInitSearchResponse {
  nendo_list: NendoMasterEntity[];
  kamoku_list: KamokuMasterEntity[];
  saimoku_list: SaimokuMasterEntity[];
  ledger_list: LedgerSearchResponse[];
}

export class InitSearchResponse implements IInitSearchResponse {
  public nendo_list: NendoMasterEntity[];
  public kamoku_list: KamokuMasterEntity[];
  public saimoku_list: SaimokuMasterEntity[];
  public ledger_list: LedgerSearchResponse[];

  constructor(
    initialValues: Partial<InitSearchResponse> | undefined = undefined
  ) {
    let anyValues: any = {};
    if (initialValues != null) {
      anyValues = initialValues;
    }
    const values = anyValues as InitSearchResponse;
    this.nendo_list = values.nendo_list ?? [];
    this.kamoku_list = values.kamoku_list ?? [];
    this.saimoku_list = values.saimoku_list ?? [];
    this.ledger_list = values.ledger_list ?? [];
  }
}
