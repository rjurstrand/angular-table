import { Pipe, PipeTransform } from "@angular/core";
import IColumn from "src/domain/column";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(rows: any[], columns: IColumn[], filter: string): any[] {
    if (!filter) {
      return rows;
    }
    const columnsToUse = columns.filter((c) => c.filterable);

    return rows.filter((row) =>
      columnsToUse.some(
        (c) =>
          row[c.property] &&
          row[c.property]
            .toString()
            .toLowerCase()
            .indexOf(filter.toLowerCase()) > -1
      )
    );
  }
}
