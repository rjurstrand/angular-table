import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { DragDropModule } from "@angular/cdk/drag-drop";

import { AppComponent } from "./components/app.component";
import { TableComponent } from "./components/table/table.component";
import { PagingComponent } from "./components/table/paging/paging.component";
import { SortPipe } from "./pipes/sort.pipe";
import { FormsModule } from "@angular/forms";
import { FilterPipe } from "./pipes/filter.pipe";
import { BasicUsageComponent } from "./components/demos/basic-usage/basic-usage.component";
import { DragNDropComponent } from "./components/demos/drag-n-drop/drag-n-drop.component";

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PagingComponent,
    SortPipe,
    FilterPipe,
    BasicUsageComponent,
    DragNDropComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
