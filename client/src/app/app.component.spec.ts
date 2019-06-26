import { HttpClientModule } from "@angular/common/http";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {HTTP_REQUEST_INIT, SERVICE_INIT, SOCKET_INIT} from "../../../common/constant/App/constant";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      declarations: [
        AppComponent,
      ],
    }).compileComponents().catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create the app", () => {
    expect(component).toBeTruthy();
  });

  it("ngOnInt should initialize the title, service, http request and socket message", () => {
    expect(component.title).toMatch("Client");
    expect(component.serviceTest).toMatch(SERVICE_INIT);
    expect(component.httpTest).toMatch(HTTP_REQUEST_INIT);
    expect(component.socketTest).toMatch(SOCKET_INIT);
  });

});
