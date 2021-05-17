import { Converter, ConverterItem } from "@common/Converter";
import { IPagingRequest, PagingRequest } from "@common/model/PagingCondition";

interface _ILedgerSearchRequest {
  nendo: string;
  ledger_cd: string;
  month?: string;
}

export type ILedgerSearchRequest = _ILedgerSearchRequest & IPagingRequest;

export class LedgerSearchRequest
  extends PagingRequest
  implements ILedgerSearchRequest
{
  public nendo: string;
  public ledger_cd: string;
  public month: string | undefined;
  constructor(
    initialValues: Partial<ILedgerSearchRequest> | undefined = undefined
  ) {
    super(initialValues);
    let anyValues: any = {};
    if (initialValues != null) {
      anyValues = initialValues;
    }
    const values = anyValues as ILedgerSearchRequest;
    this.nendo = values.nendo;
    this.ledger_cd = values.ledger_cd;
    this.month = values.month;
  }

  public static isValid(json: any) {
    const converter = new Converter<Partial<ILedgerSearchRequest>>();
    const { add } = converter;
    add("nendo", ConverterItem.String, true, false);
    add("ledger_cd", ConverterItem.String, true, false);
    add("month", ConverterItem.String, false, false);
    PagingRequest.addValidator(add);
    return converter.convert(json);
  }
}
