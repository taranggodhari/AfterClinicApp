import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { DailyInformationsService } from "../dailyinformations.service";
@Component({
  selector: "edit",
	templateUrl: "app/dailyinformations/edit/edit.template.html"
})
export class EditComponent {
  dailyinformation: any = {};
  errorMessage: string;
  paramsObserver: any;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
	  private _dailyInformationsService: DailyInformationsService
  ) {}
  ngOnInit() {
    this.paramsObserver = this._route.params.subscribe(params => {
      let dailyinformationId = params["dailyinformationId"];
		this._dailyInformationsService.read(dailyinformationId).subscribe(
        dailyinformation => {
          this.dailyinformation = dailyinformation;
        },
        error => this._router.navigate(["/dailyinformations"])
      );
    });
  }
  ngOnDestroy() {
    this.paramsObserver.unsubscribe();
  }
  update() {
	  this._dailyInformationsService
      .update(this.dailyinformation)
      .subscribe(
		  savedDailyInformation => this._router.navigate(["/dailyinformations", savedDailyInformation._id]),
        error => (this.errorMessage = error)
      );
  }
}
