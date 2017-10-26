import { Injectable } 				from '@angular/core';
import { Http, Response, Headers } 	from '@angular/http';
import { Observable } 				from 'rxjs/Observable';
import { AuthHttp }     			from 'angular2-jwt';

import 'rxjs';
import 'rxjs/add/operator/map'

import { Aluno } from './aluno';
import { Config } from '../common/config';

@Injectable()
export class AlunosService { 

    private url : string;

    constructor(public _authHttp: AuthHttp,
  				private _config: Config) {
					  this.url = this._config.BASEURI+"aluno/";
				  }			  

		  
  	getAlunos(): Observable<Aluno[]> {
		return this._authHttp.get(this.url)
			.map(response => <Aluno[]>response.json())
			.catch(this.handleError);
	}

	getAluno(id: number): Observable<Aluno> {
		return this._authHttp.get(this.url+id)
			.map((response: Response) => <Aluno>response.json())
			.catch(this.handleError);

	}

	salvar(aluno: Aluno): Observable<Aluno> {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');

		if(aluno.id == null) {
			return this._authHttp.post(this.url, JSON.stringify(aluno), {headers: headers})
            	.map((response: Response) => <Aluno>response.json())
            	.catch(this.handleError);
		} else {
			return this._authHttp.put(this.url+aluno.id, JSON.stringify(aluno), {headers: headers})
            	.map((response: Response) => <Aluno>response.json())
            	.catch(this.handleError);
		}		
	}
	
	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || error.text());
	}
	
}
