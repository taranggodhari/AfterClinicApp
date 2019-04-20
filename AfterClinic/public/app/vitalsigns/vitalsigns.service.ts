import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod, Response } from '@angular/http';
@Injectable()
export class VitalSignsService {
	private _baseURL = 'api/vitalsigns';
	private _getPatientsUrl = 'api/patients';
	constructor(private _http: Http) { }
	
	create(vitalsign: any): Observable<any> {
		return this._http
			.post(this._baseURL, vitalsign)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

	read(vitalsignId: string): Observable<any> {
		return this._http
			.get(`${this._baseURL}/${vitalsignId}`)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

	update(vitalsign: any): Observable<any> {
		return this._http
			.put(`${this._baseURL}/${vitalsign._id}`, vitalsign).map((res: Response) => res.json())
			.catch(this.handleError);
	}

	delete(vitalsignId: any): Observable<any> {
		return this._http
			.delete(`${this._baseURL}/${vitalsignId}`)
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
