import {Headers, Http}  from '@angular/http';
import { Observable }   from 'rxjs/Observable';
import { AuthHttp }     from 'angular2-jwt';
import { Router }       from '@angular/router';
import { Config }         from './config';
import { Entity }       from './Entity';
import 'rxjs/Rx';

export class Service {
    path: string;
    config: Config;

    constructor(public authHttp: AuthHttp, config: Config) {
        this.config = config;
    }

    public get() {
        return this.authHttp.get(this.path)
                                    .map(res => {return res.json() })
                                    .catch(error => this.handleError(error));
    } 

    public delete(id) {
        return this.authHttp.delete(this.path + '/' + id)
            .map(res => res)
            .catch(error => this.handleError(error));
    }

    protected handleError(error) {
        var msgErro = 'Não foi possível comunicar com o servidor';
        if (error.status) {
            if (error.status === 401) {
                localStorage.removeItem('id_token');
                return Observable.throw(error);
            }
            if (error.status === 404) {
                return Observable.throw('Não foi possível comunicar com o servidor ou serviço não existente');
            }
            if (error.status === 500) {
                msgErro = 'Erro inesperado ao comunicar com o servidor: '
                                + error.message;
            }
        }
        return Observable.throw(msgErro);
    }
}
