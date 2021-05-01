import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import IPerson from "src/domain/person";

@Injectable({
  providedIn: "root",
})
export class PersonService {
  constructor(private httpClient: HttpClient) {}

  getPersons(limit?: number): Promise<IPerson[]> {
    return new Promise<IPerson[]>((resolve, reject) => {
      this.httpClient
        .get("assets/persons.json")
        .toPromise()
        .then((persons: IPerson[]) => {
          resolve(limit ? persons.splice(0, limit) : persons);
        })
        .catch((response: any) => {
          reject();
        });
    });
  }
}
