import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import IColumn from "src/domain/column";
import IPerson from "src/domain/person";
import { PersonService } from "src/services/person.service";

@Component({
  selector: "app-basic-usage",
  templateUrl: "./basic-usage.component.html",
})
export class BasicUsageComponent implements OnInit, AfterViewInit {
  @ViewChild("options", { static: false })
  optionsTemplate: TemplateRef<any>;

  columns: IColumn[] = [];
  persons: IPerson[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.getPersons();
  }

  ngAfterViewInit(): void {
    this.initColumns();
  }

  edit(row: IPerson) {
    console.log("edit", row);
  }

  delete(row: IPerson) {
    console.log("delete", row);
  }

  //////////

  private getPersons(): void {
    this.personService
      .getPersons()
      .then((persons) => {
        this.persons = persons;
      })
      .catch(() => {});
  }

  private initColumns(): void {
    this.columns = [
      {
        text: "First name",
        property: "firstName",
        width: 20,
        sortable: true,
        filterable: true,
      },
      {
        text: "Last name",
        property: "lastName",
        width: 20,
        sortable: true,
        filterable: true,
      },
      {
        text: "Age",
        property: "age",
        width: 20,
        sortable: true,
        filterable: true,
      },
      {
        text: "E-mail",
        property: "email",
        width: 20,
        sortable: true,
        filterable: true,
      },
      {
        text: "Options",
        template: this.optionsTemplate,
        center: true,
        width: 20,
      },
    ];
  }
}
