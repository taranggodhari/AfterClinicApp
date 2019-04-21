import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthenticationService } from "../../authentication/authentication.service";
import { DailyTipsService } from "../dailytips.service";
@Component({
  selector: "view",
	templateUrl: "app/dailytips/view/view.template.html"
})
export class ViewComponent {
  user: any;
  dailytip: any;
  paramsObserver: any;
  errorMessage: string;
  allowEdit: boolean = false;
  //
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _authenticationService: AuthenticationService,
      private _dailyTipsService: DailyTipsService
  ) {}
  //
  ngOnInit() {
    this.user = this._authenticationService.user;
    this.paramsObserver = this._route.params.subscribe(params => {
      let dailytipId = params["dailytipId"];
        this._dailyTipsService.read(dailytipId).subscribe(
        dailytip => {
            this.dailytip = dailytip;
            this.allowEdit = this.user && this.user._id === this.dailytip.nurse._id;
        },
        error => this._router.navigate(["/dailytips"])
      );
    });
  }
  //
  ngOnDestroy() {
    this.paramsObserver.unsubscribe();
  }
  //
  delete() {
      this._dailyTipsService
      .delete(this.dailytip._id)
      .subscribe(
        deletedVitalSigns => this._router.navigate(["/dailytips"]),
        error => (this.errorMessage = error)
      );
  }
}
