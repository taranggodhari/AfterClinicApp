import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DailyInformationsService } from "../dailyinformations.service";
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
	selector: "create",
	templateUrl: "app/dailyinformations/create/create.template.html"
})
export class CreateComponent implements OnInit{
	user: any;
	nurses: any;
	dailyinformation: any = {};
	errorMessage: string;
	constructor(private _router: Router, private _dailyInformationsService: DailyInformationsService, private _authenticationService:
		AuthenticationService) {
		this.user = _authenticationService.getLoggedInUser();
	}
    create() {       
        this.dailyinformation.creator = this.user;
        console.log(this.dailyinformation);

		this._dailyInformationsService
			.create(this.dailyinformation)
			.subscribe(
				createdDailyInformation => this._router.navigate(["/dailyinformations", createdDailyInformation._id]),
				error => (this.errorMessage = error)
			);
	}
	ngOnInit() {
		this._dailyInformationsService.getNurses().subscribe(
			nurses => (this.nurses = nurses),
			error => (this.errorMessage = error)
		);;
		console.log(this.nurses);
	}
}
