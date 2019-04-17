import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthenticationService } from "../../authentication/authentication.service";
import { VitalSignsService } from "../vitalsigns.service";
@Component({
  selector: "view",
	templateUrl: "app/vitalsigns/view/view.template.html"
})
export class ViewComponent {
  user: any;
  vitalsign: any;
  paramsObserver: any;
  errorMessage: string;
  allowEdit: boolean = false;
  //
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _authenticationService: AuthenticationService,
	  private _vitalSignsService: VitalSignsService
  ) {}
  //
  ngOnInit() {
    this.user = this._authenticationService.user;
    this.paramsObserver = this._route.params.subscribe(params => {
      let vitalsignId = params["vitalsignId"];
		this._vitalSignsService.read(vitalsignId).subscribe(
        vitalsign => {
          this.vitalsign = vitalsign;
          this.allowEdit = this.user && this.user._id === this.vitalsign.nurse._id;
        },
        error => this._router.navigate(["/vitalsigns"])
      );
    });
  }
  //
  ngOnDestroy() {
    this.paramsObserver.unsubscribe();
  }
  //
  delete() {
	  this._vitalSignsService
      .delete(this.vitalsign._id)
      .subscribe(
        deletedVitalSigns => this._router.navigate(["/vitalsigns"]),
        error => (this.errorMessage = error)
      );
  }
}
