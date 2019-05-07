import { Component } from '@angular/core';
import { DailyTipsService } from './dailytips.service';
import { AuthenticationService } from '../authentication/authentication.service';
@Component({
	selector: "dailytips",
	templateUrl: "app/vitalsigns/vitalsigns.template.html",
    providers: [DailyTipsService]
})
export class DailyTipsComponent {
	user: any;
	constructor(private _authenticationService:
		AuthenticationService) {
		this.user = _authenticationService.getLoggedInUser();
	}
}