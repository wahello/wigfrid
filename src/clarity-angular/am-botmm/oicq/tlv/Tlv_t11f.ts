import {Tlv_t} from "./Tlv_t";
import {injectable} from "inversify";
@injectable()
export class Tlv_t11f extends Tlv_t {
    public constructor() {
        super();
        this._cmd = 0x11f;
    }

    public verify() {
        if (this._body_len < 8) {
            return false;
        }
        return true;
    }

    public get_chg_time() {
        return this._buf.readInt32BE(this._head_len);
    }

    public get_tk_pri() {
        return this._buf.readInt32BE(this._head_len + 4);
    }
}