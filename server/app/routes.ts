import { Router } from "express";
import { inject, injectable } from "inversify";
import { TesterService } from "./Test/tester.service";
import Types from "./types";

@injectable()
export class Routes {

    public constructor(@inject(Types.TesterService) private test: TesterService) {}

    public get routes(): Router {

        const router: Router = Router();

        router.use(this.test.routes);

        return router;
    }
}
