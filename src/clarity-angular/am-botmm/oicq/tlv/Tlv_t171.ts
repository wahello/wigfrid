import {Tlv_t} from "./Tlv_t";
import {injectable} from "inversify";
import {Buffer} from "buffer";

@injectable()
export class Tlv_t171 extends Tlv_t {
    public constructor() {
        super();
        this._cmd = 369;
    }
}
