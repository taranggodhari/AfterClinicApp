import { Component } from "@angular/core";
import { VitalSignsService } from "../vitalsigns.service";
@Component({
  selector: "list",
	templateUrl: "app/vitalsigns/list/list.template.html"
})
export class ListComponent {
  vitalsigns: any;
  errorMessage: string;
	constructor(private _vitalSignsService: VitalSignsService) {}
  ngOnInit() {
	  this._vitalSignsService.list().subscribe(vitalsigns => (this.vitalsigns = vitalsigns));
  }
}
