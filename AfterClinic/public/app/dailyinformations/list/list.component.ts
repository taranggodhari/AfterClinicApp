import { Component } from "@angular/core";
import { DailyInformationsService } from "../dailyinformations.service";
import { AuthenticationService } from '../../authentication/authentication.service';
@Component({
	selector: "list",
	templateUrl: "app/dailyinformations/list/list.template.html"
})
export class ListComponent {
	dailyinformations: any;
	user: any;
	errorMessage: string;
	constructor(private _dailyInformationsService: DailyInformationsService, private _authenticationService:
		AuthenticationService) {
		this.user = _authenticationService.getLoggedInUser();
	}
	ngOnInit() {
		this._dailyInformationsService.list().subscribe(dailyinformations => {
			if (JSON.stringify(dailyinformations) !== '[]') {
				//this.dailyinformations = new Array();
				this.dailyinformations = dailyinformations;
				if (this.user.role == "PATIENT") {
					this.dailyinformations = [];
					dailyinformations.forEach((dailyinfo, index) => {
						if (dailyinfo.creator._id == this.user._id) {
							this.dailyinformations.push(dailyinfo);
						}
					});
					if (JSON.stringify(this.dailyinformations) === '[]') {
						this.dailyinformations = null;
					}
				}
			} else {
				this.dailyinformations = null;
			}

		});
	}
}
