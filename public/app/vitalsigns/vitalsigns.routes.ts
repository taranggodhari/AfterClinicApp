import { Routes } from '@angular/router';
import { VitalSignsComponent } from './vitalsigns.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
export const VitalSignsRoutes: Routes = [{
	path: 'vitalsigns',
	component: VitalSignsComponent,
	children: [
		{ path: '', component: ListComponent },
		{ path: 'create', component: CreateComponent },
		{ path: ':vitalsignId', component: ViewComponent },
		{ path: ':vitalsignId/edit', component: EditComponent }
	],
}];