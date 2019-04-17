import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { VitalSignsService } from "../vitalsigns.service";

@Component({
	selector: "create",
	templateUrl: "app/vitalsigns/create/create.template.html"
})
export class CreateComponent {
	vitalsign: any = {};
	errorMessage: string;
	constructor(
		private _router: Router,
		private _vitalSignsService: VitalSignsService
	) { }
	create() {
		this._vitalSignsService
			.create(this.vitalsign)
			.subscribe(
			createdVitalSign => this._router.navigate(["/vitalsigns", createdVitalSign._id]),
				error => (this.errorMessage = error)
			);
	}
}
