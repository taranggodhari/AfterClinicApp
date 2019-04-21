import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod, Response } from '@angular/http';
@Injectable()
export class DailyTipsService {
    private _baseURL = '/api/dailytips';
    private _getPatientsUrl = 'api/patients';

	constructor(private _http: Http) { }
	
	create(dailytip: any): Observable<any> {
		return this._http
            .post(this._baseURL, dailytip)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

    read(dailytipId: string): Observable<any> {
		return this._http
            .get(`${this._baseURL}/${dailytipId}`)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

    update(dailytip: any): Observable<any> {
		return this._http
            .put(`${this._baseURL}/${dailytip._id}`, dailytip).map((res: Response) => res.json())
			.catch(this.handleError);
	}

    delete(dailytipId: any): Observable<any> {
		return this._http
            .delete(`${this._baseURL}/${dailytipId}`)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

	list(): Observable<any> {
		return this._http
            .post(this._baseURL + "/get", null)
			.map((res: Response) => res.json())
			.catch(this.handleError);
    }

	getPatients(): Observable<any> {
		return this._http
			.post(this._getPatientsUrl, null)
			.map((res: Response) => res.json())
			.catch(this.handleError);
    }

	private handleError(error: Response) {
		return Observable.throw(error.json().message || 'Server error');
	}
}
