import { Component } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'mean-app',
	templateUrl: './app/app.template.html'
})
export class AppComponent {
	user: any;
	constructor(private _authenticationService: AuthenticationService)
	{
		this.user = _authenticationService.user;
	}
}
