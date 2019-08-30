import { NextFunction, Request, Response, Router } from "express";
import {injectable} from "inversify";
import { HTTP_REQUEST_WORK, RESPONSE } from "../../../common/constant/Test/constant";

@injectable()
export class TesterService {

public httpResponse(res: Response): void {
    res.send(JSON.stringify(RESPONSE[HTTP_REQUEST_WORK]));
}

public get routes(): Router {
    const router: Router = Router();
    router.get("/test",
               (req: Request, res: Response, next: NextFunction) => this.httpResponse(res));

    return router;
}

}
