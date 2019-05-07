import { Component } from "@angular/core";
import { DailyTipsService } from "../dailytips.service";
import { AuthenticationService } from "../../authentication/authentication.service";
@Component({
  selector: "list",
	templateUrl: "app/dailytips/list/list.template.html"
})
export class ListComponent {
    user: any;
    dailytips: any;
    errorMessage: string;

    constructor(private _dailyTipsService: DailyTipsService, _authenticationService: AuthenticationService) {
        this.user = _authenticationService.getLoggedInUser();
    }

  ngOnInit() {
      this._dailyTipsService.list().subscribe(dailytips => {
          if (JSON.stringify(dailytips) !== '[]') {
              this.dailytips = dailytips;
          } else {
              this.dailytips = null;
          }
          
      });
  }
}
