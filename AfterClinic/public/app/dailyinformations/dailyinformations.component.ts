import { Component } from '@angular/core';
import { DailyInformationsService } from './dailyinformations.service';
import { AuthenticationService } from '../authentication/authentication.service';
@Component({
	selector: "dailyinformations",
	templateUrl: "app/dailyinformations/dailyinformations.template.html",
	providers: [DailyInformationsService]
})
export class DailyInformationsComponent {
	user: any;
	constructor(private _authenticationService:
		AuthenticationService) {
		this.user = _authenticationService.getLoggedInUser();
	}
}