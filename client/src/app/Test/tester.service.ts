import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RESPONSE, SERVICE_WORK } from "../../../../common/constant/Test/constant";

@Injectable({
  providedIn: "root",
})
export class TesterService {

  public constructor(private http: HttpClient) { }

  public work(functionnality: number): string {
    return RESPONSE[functionnality];
  }

  public serviceTest(): string {
    return this.work(SERVICE_WORK);
  }

}
