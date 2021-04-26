import { Entity } from "@common/model/Entity";
import {
  Converter,
  ConverterItem,
  ConvertCheckResult,
} from "@common/Converter";

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

export class JournalEntity extends Entity implements IJournalEntity {
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
  constructor(initialValues: Partial<IJournalEntity> | undefined = undefined) {
    super();
    let values: any = {};
    if (initialValues != null) {
      values = initialValues;
    }
    this.id = values.id;
    this.nendo = values.nendo;
    this.date = values.date;
    this.karikata_cd = values.karikata_cd;
    this.karikata_value = values.karikata_value;
    this.note = values.note;
    this.kasikata_cd = values.kasikata_cd;
    this.kasikata_value = values.kasikata_value;
    this.checked = values.checked;
    this.created_at = values.created_at;
    this.updated_at = values.updated_at;
  }

  public static isCreatable(json: any) {
    const converter = new Converter<Partial<IJournalEntity>>();
    const { add } = converter;
    add("nendo", ConverterItem.String, true, false);
    add("date", ConverterItem.String, true, false);
    add("karikata_cd", ConverterItem.String, true, false);
    add("karikata_value", ConverterItem.Number, true, false);
    add("note", ConverterItem.String, false, true);
    add("kasikata_cd", ConverterItem.String, true, false);
    add("kasikata_value", ConverterItem.Number, true, false);
    add("checked", ConverterItem.String, true, false);
    return converter.convert(json);
  }

  public static isUpdatable(json: any) {
    const converter = new Converter<Partial<IJournalEntity>>();
    const { add } = converter;
    add("nendo", ConverterItem.String, false, false);
    add("date", ConverterItem.String, false, false);
    add("karikata_cd", ConverterItem.String, false, false);
    add("karikata_value", ConverterItem.Number, false, false);
    add("note", ConverterItem.String, false, true);
    add("kasikata_cd", ConverterItem.String, false, false);
    add("kasikata_value", ConverterItem.Number, false, false);
    add("checked", ConverterItem.String, false, false);
    return converter.convert(json);
  }
}
