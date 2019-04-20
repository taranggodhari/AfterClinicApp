import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { VitalSignsService } from "../vitalsigns.service";
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
	selector: "create",
	templateUrl: "app/vitalsigns/create/create.template.html"
})
export class CreateComponent implements OnInit{
	user: any;
	patients: any;
	vitalsign: any = {};
	errorMessage: string;
	constructor(private _router: Router, private _vitalSignsService: VitalSignsService, private _authenticationService:
		AuthenticationService) {
		this.user = _authenticationService.getLoggedInUser();
	}
	create() {
		this._vitalSignsService
			.create(this.vitalsign)
			.subscribe(
				createdVitalSign => this._router.navigate(["/vitalsigns", createdVitalSign._id]),
				error => (this.errorMessage = error)
			);
	}
	ngOnInit() {
		this._vitalSignsService.getPatients().subscribe(
			patients => (this.patients = patients),
			error => (this.errorMessage = error)
		);;
		console.log(this.patients);
	}
}
