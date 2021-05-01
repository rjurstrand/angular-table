import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-paging",
  templateUrl: "./paging.component.html",
})
export class PagingComponent {
  @Input() page: number;
  @Input() pageSize: number;
  @Input() set numberOfFilteredItems(value: number) {
    this.lastPage = value > 0 ? Math.ceil(value / this.pageSize) : 1;
  }

  @Output() next$ = new EventEmitter<void>();
  @Output() previous$ = new EventEmitter<void>();
  @Output() first$ = new EventEmitter<void>();
  @Output() last$ = new EventEmitter<number>();

  lastPage: number = undefined;

  constructor() {}

  next(): void {
    this.next$.emit();
  }

  previous(): void {
    this.previous$.emit();
  }

  first(): void {
    this.first$.emit();
  }

  last(): void {
    this.last$.emit(this.lastPage);
  }
}
