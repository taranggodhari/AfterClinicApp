import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DailyTipsService } from "../dailytips.service";
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
	selector: "create",
	templateUrl: "app/dailytips/create/create.template.html"
})
export class CreateComponent implements OnInit{
	user: any;
	patients: any;
	dailytip: any = {};
    errorMessage: string;

    constructor(private _router: Router, private _dailyTipsService: DailyTipsService, private _authenticationService:
		AuthenticationService) {
		this.user = _authenticationService.getLoggedInUser();
    }

    create() {       
        this.dailytip.nurse = this.user;
        console.log(this.dailytip);

        this._dailyTipsService
            .create(this.dailytip)
			.subscribe(
            createdDailyTip => this._router.navigate(["/dailytips", createdDailyTip._id]),
				error => (this.errorMessage = error)
			);
    }

	ngOnInit() {
 
    }

}
