import { Component } from '@angular/core';
import { VitalSignsService } from './vitalsigns.service';
@Component({
	selector: "vitalsigns",
	templateUrl: "app/vitalsigns/vitalsigns.template.html",
	providers: [VitalSignsService]
})
export class VitalSignsComponent { }