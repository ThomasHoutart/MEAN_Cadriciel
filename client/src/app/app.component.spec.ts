import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
      ],
    }).compileComponents().catch();
  }));

  it("should create the app", () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    // tslint:disable:no-any
    const app: any = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'client'`, () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    // tslint:disable:no-any
    const app: any = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("client");
  });

  it("should render title in a h1 tag", () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    // tslint:disable:no-any
    const compiled: any = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain("Welcome to client!");
  });
});
