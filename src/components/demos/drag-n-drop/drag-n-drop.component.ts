import { Component, OnInit } from "@angular/core";
import IColumn from "src/domain/column";
import IPerson from "src/domain/person";
import { PersonService } from "src/services/person.service";

@Component({
  selector: "app-drag-n-drop",
  templateUrl: "./drag-n-drop.component.html",
})
export class DragNDropComponent implements OnInit {
  columns: IColumn[] = [];
  persons: IPerson[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.getPersons();
    this.initColumns();
  }

  //////////

  private getPersons(): void {
    this.personService
      .getPersons(5)
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
      },
      {
        text: "Last name",
        property: "lastName",
        width: 20,
      },
      {
        text: "Age",
        property: "age",
        width: 20,
      },
      {
        text: "E-mail",
        property: "email",
        width: 20,
      },
    ];
  }
}
