import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { DailyTipsService } from "../dailytips.service";
@Component({
  selector: "edit",
	templateUrl: "app/dailytips/edit/edit.template.html"
})
export class EditComponent {
  dailytip: any = {};
  errorMessage: string;
  paramsObserver: any;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
      private _dailyTipsService: DailyTipsService
    ) { }

  ngOnInit() {
    this.paramsObserver = this._route.params.subscribe(params => {
      let dailytipId = params["dailytipId"];
        this._dailyTipsService.read(dailytipId).subscribe(
        dailytip => {
            this.dailytip = dailytip;
        },
        error => this._router.navigate(["/dailytips"])
      );
    });
    }

  ngOnDestroy() {
    this.paramsObserver.unsubscribe();
    }

  update() {
      this._dailyTipsService
          .update(this.dailytip)
      .subscribe(
          savedDailyTip => this._router.navigate(["/dailytips", savedDailyTip._id]),
        error => (this.errorMessage = error)
      );
  }
}
