import {Injectable} from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class Config {
    public BASEURI = "http://localhost:8080/";

    constructor() {
        if (environment.production) {
            this.BASEURI = "http://localhost:8080/";
        }
    }
}