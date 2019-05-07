import { Component } from '@angular/core';
import { VitalSignsService } from './vitalsigns.service';
import { AuthenticationService } from '../authentication/authentication.service';
@Component({
	selector: "vitalsigns",
	templateUrl: "app/vitalsigns/vitalsigns.template.html",
	providers: [VitalSignsService]
})
export class VitalSignsComponent {
	user: any;
	constructor(private _authenticationService:
		AuthenticationService) {
		this.user = _authenticationService.getLoggedInUser();
	}
}