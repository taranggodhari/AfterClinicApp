import { Routes } from '@angular/router';
import { DailyInformationsComponent } from './dailyinformations.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
export const DailyInformationsRoutes: Routes = [{
	path: 'dailyinformations',
	component: DailyInformationsComponent,
	children: [
		{ path: '', component: ListComponent },
		{ path: 'create', component: CreateComponent },
		{ path: ':dailyinformationId', component: ViewComponent },
		{ path: ':dailyinformationId/edit', component: EditComponent }
	],
}];