import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { VitalSignsService } from "../vitalsigns.service";
import { AuthenticationService } from "../../authentication/authentication.service";
@Component({
    selector: "edit",
    templateUrl: "app/vitalsigns/edit/edit.template.html"
})
export class EditComponent {
    user: any;
    vitalsign: any = {};
    errorMessage: string;
    paramsObserver: any;
    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _vitalSignsService: VitalSignsService,
        private _authenticationService: AuthenticationService
    ) {
        this.user = _authenticationService.getLoggedInUser();
    }
    ngOnInit() {
        this.paramsObserver = this._route.params.subscribe(params => {
            let vitalsignId = params["vitalsignId"];
            this._vitalSignsService.read(vitalsignId).subscribe(
                vitalsign => {
                    this.vitalsign = vitalsign;
                },
                error => this._router.navigate(["/vitalsigns"])
            );
        });
    }
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
    update() {
        this._vitalSignsService
            .update(this.vitalsign)
            .subscribe(
                savedVitalSign => this._router.navigate(["/vitalsigns", savedVitalSign._id]),
                error => (this.errorMessage = error)
            );
    }
}
