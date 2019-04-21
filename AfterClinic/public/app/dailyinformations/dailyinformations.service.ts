import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod, Response } from '@angular/http';
@Injectable()
export class DailyInformationsService {
	private _baseURL = 'api/dailyinformation';
	private _getNursesUrl = 'api/nurses';
	constructor(private _http: Http) { }
	
	create(dailyinformation: any): Observable<any> {
		return this._http
			.post(this._baseURL, dailyinformation)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

	read(dailyinformationId: string): Observable<any> {
		return this._http
			.get(`${this._baseURL}/${dailyinformationId}`)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

	update(dailyinformation: any): Observable<any> {
		return this._http
			.put(`${this._baseURL}/${dailyinformation._id}`, dailyinformation).map((res: Response) => res.json())
			.catch(this.handleError);
	}

	delete(dailyinformationId: any): Observable<any> {
		return this._http
			.delete(`${this._baseURL}/${dailyinformationId}`)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

	list(): Observable<any> {
		return this._http
            .post(this._baseURL + "/get", null)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}
	getNurses(): Observable<any> {
		return this._http
			.post(this._getNursesUrl, null)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}
	private handleError(error: Response) {
		return Observable.throw(error.json().message || 'Server error');
	}
}
