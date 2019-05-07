import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthenticationService } from "../../authentication/authentication.service";
import { DailyInformationsService } from "../dailyinformations.service";
@Component({
  selector: "view",
	templateUrl: "app/dailyinformations/view/view.template.html"
})
export class ViewComponent {
  user: any;
  dailyinformation: any;
  paramsObserver: any;
  errorMessage: string;
  allowEdit: boolean = false;
  //
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _authenticationService: AuthenticationService,
	  private _dailyInformationsService: DailyInformationsService
  ) {}
  //
  ngOnInit() {
    this.user = this._authenticationService.user;
    this.paramsObserver = this._route.params.subscribe(params => {
      let dailyinformationId = params["dailyinformationId"];
		this._dailyInformationsService.read(dailyinformationId).subscribe(
        dailyinformation => {
          this.dailyinformation = dailyinformation;
          this.allowEdit = this.user && this.user._id === this.dailyinformation.nurse._id;
        },
        error => this._router.navigate(["/dailyinformations"])
      );
    });
  }
  //
  ngOnDestroy() {
    this.paramsObserver.unsubscribe();
  }
  //
  delete() {
	  this._dailyInformationsService
      .delete(this.dailyinformation._id)
      .subscribe(
        deletedDailyInformations => this._router.navigate(["/dailyinformations"]),
        error => (this.errorMessage = error)
      );
  }
}
