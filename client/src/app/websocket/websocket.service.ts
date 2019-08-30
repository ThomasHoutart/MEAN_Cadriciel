import { Injectable } from "@angular/core";
import * as io from "socket.io-client";
import { SERVER_URL } from "../../../../common/constant/Routes/constant";

@Injectable({
  providedIn: "root",
})
export class WebsocketService {

  public socket: SocketIOClient.Socket;

  public constructor() {
    this.socket = io.connect(SERVER_URL);
  }
}
