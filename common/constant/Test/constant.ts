import { SERVER_URL } from "../Routes/constant";

export const RESPONSE: string[] = [
    "service work",
    "http request work",
    "socket work",
]

export const SERVICE_WORK: number = 0;
export const HTTP_REQUEST_WORK: number = 1;
export const SOCKET_WORK: number = 2;
export const HTTP_REQUEST_TEST: string = SERVER_URL + "test";