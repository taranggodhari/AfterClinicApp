import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VideosRoutes } from './videos.routes';
import { SafePipe } from './SafePipe'
import { VideosComponent } from './videos.component';
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(VideosRoutes),
    ],
    declarations: [
        VideosComponent,
        SafePipe
    ]
})
export class VideosModule { }
