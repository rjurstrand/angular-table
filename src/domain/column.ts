import { TemplateRef } from "@angular/core";

export default interface IColumn {
  text: string;
  property?: string;
  template?: TemplateRef<any>;
  center?: boolean;
  width?: number;
  sortable?: boolean;
  filterable?: boolean;
}
