import { Pipe, PipeTransform } from "@angular/core";
import { compare } from "src/domain/sort";

@Pipe({
  name: "sort",
})
export class SortPipe implements PipeTransform {
  transform(rows: any[], sortProperty: string, sortDirection: string): any[] {
    return rows.sort((a, b) => {
      const res = compare(a[sortProperty], b[sortProperty]);
      return sortDirection === "asc" ? res : -res;
    });
  }
}
