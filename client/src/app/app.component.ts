import { Component, OnInit } from "@angular/core";
import { take } from "rxjs/operators";
import {HTTP_REQUEST_INIT, SERVICE_INIT, SOCKET_INIT} from "../../../common/constant/App/constant";
import {TesterService} from "./Test/tester.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  public title: string;
  public serviceTest: string;
  public httpTest: string;
  public socketTest: string;

  public constructor(private test: TesterService) {}

  public test2(): void {
    this.test.httpRequestTest().pipe(take(1)).subscribe((message: string) => {
      this.httpTest = message;
    });
  }

  public ngOnInit(): void {

    this.title = "Client";
    this.serviceTest = SERVICE_INIT;
    this.httpTest = HTTP_REQUEST_INIT;
    this.socketTest = SOCKET_INIT;
  }
}
