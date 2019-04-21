import { Component } from "@angular/core";
import { DailyTipsService } from "../dailytips.service";
@Component({
  selector: "list",
	templateUrl: "app/dailytips/list/list.template.html"
})
export class ListComponent {
  dailytips: any;
  errorMessage: string;
    constructor(private _dailyTipsService: DailyTipsService) {}
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
