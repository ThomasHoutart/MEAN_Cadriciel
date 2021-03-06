import { Container } from "inversify";
import { TesterService } from "./Test/tester.service";
import { Application } from "./app";
import { Routes } from "./routes";
import { Server } from "./server";
import Types from "./types";

const container: Container = new Container();

container.bind(Types.Server).to(Server);
container.bind(Types.Application).to(Application);
container.bind(Types.TesterService).to(TesterService);
container.bind(Types.Routes).to(Routes);

export { container };
