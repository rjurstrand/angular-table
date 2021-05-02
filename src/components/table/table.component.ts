import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Observable, of } from "rxjs";
import IColumn from "src/domain/column";
import { rotate } from "src/domain/sort";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
})
export class TableComponent implements OnInit {
  @Input() rows: any[];
  @Input() columns: IColumn[];
  @Input() pageSize: number;
  @Input() defaultSortProp: string;
  @Input() defaultSortDirection: string;
  @Input() dragNDrop: boolean;

  @Output() rowClick$ = new EventEmitter<any>();

  page = 1;
  dataSource$: Observable<any[]>;
  sortProperty = "";
  sortDirection = "";
  hasFilter: boolean;
  filter: string;

  constructor() {}

  ngOnInit(): void {
    this.hasFilter = this.columns.some((_) => _.filterable);

    if (!this.dragNDrop) {
      this.sortProperty = this.defaultSortProp;
      this.sortDirection = this.defaultSortDirection;
    }

    this.dataSource$ = of(this.rows);
  }

  next(): void {
    this.page++;
  }

  previous(): void {
    this.page--;
  }

  first(): void {
    this.page = 1;
  }

  last(page: number): void {
    this.page = page;
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.rows, event.previousIndex, event.currentIndex);
  }

  sort(c: IColumn) {
    if (!c.sortable || this.dragNDrop) {
      return;
    }

    if (c.property !== this.sortProperty) {
      this.sortDirection = "";
    }

    this.sortProperty = c.property;
    this.sortDirection = rotate[this.sortDirection];
  }

  rowClick(row: any): void {
    this.rowClick$.emit(row);
  }
}
