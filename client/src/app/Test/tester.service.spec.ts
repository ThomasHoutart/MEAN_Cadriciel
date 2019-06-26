import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { HTTP_REQUEST_WORK, RESPONSE, SERVICE_WORK, SOCKET_WORK } from "../../../../common/constant/Test/constant";
import { TesterService } from "./tester.service";

describe("TesterService", () => {
  let service: TesterService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  beforeEach(() => {
    service = TestBed.get(TesterService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("work should return specific message depending on functionnality param", () => {
    expect(service.work(SERVICE_WORK)).toMatch(RESPONSE[SERVICE_WORK]);
    expect(service.work(HTTP_REQUEST_WORK)).toMatch(RESPONSE[HTTP_REQUEST_WORK]);
    expect(service.work(SOCKET_WORK)).toMatch(RESPONSE[SOCKET_WORK]);
  });

  it("serviceTest should return a message saying the service works", () => {
    expect(service.serviceTest()).toMatch(RESPONSE[SERVICE_WORK]);
  });

});
