import {LoopBackApplication} from "loopback";

declare module 'loopback' {
    export interface LoopBackApplication {
        emit(message: string): void;
    }
}