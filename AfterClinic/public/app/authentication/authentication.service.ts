import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from
'@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthenticationService {
    public user = window['user'];
    private _signinURL = 'api/auth/signin';
    private _signupURL = 'api/auth/signup';
    constructor(private http: Http) {
    }
    isLoggedIn(): boolean {
        return (!!this.user);
    }
    signin(credentials: any): Observable<any> {
        let body = JSON.stringify(credentials);
        let headers = new Headers({
            'Content-Type':
            'application/json'
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this._signinURL, body, options)
			.map(res => {
				//this.user = res.json();
				this.user = localStorage.setItem('user', JSON.stringify(res.json()));
				console.log(this.user);
			})
            .catch(this.handleError)
    }
    signup(user: any): Observable<any> {
        let body = JSON.stringify(user);
        let headers = new Headers({
            'Content-Type':
            'application/json'
        }); let options = new RequestOptions({ headers: headers });
        return this.http.post(this._signupURL, body, options)
			.map(res => {
				//this.user = res.json();
				this.user = localStorage.setItem('user', JSON.stringify(res.json()));
			})
            .catch(this.handleError)
	}
	public getLoggedInUser() {
		return JSON.parse(localStorage.getItem('user'));
	}
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().message ||
            'Server error');
    }
}