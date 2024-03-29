﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { HomeModule } from './home/home.module';
import { VitalSignsModule } from './vitalsigns/vitalsigns.modules';
import { DailyInformationsModule } from './dailyinformations/dailyinformations.modules';
import { DailyTipsModule } from './dailytips/dailytips.modules';
import { VideosModule } from './videos/videos.module';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationModule } from './authentication/authentication.module';
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AuthenticationModule,
		HomeModule,
        VitalSignsModule,
        DailyTipsModule,
        VideosModule,
		DailyInformationsModule,
        RouterModule.forRoot(AppRoutes),
    ],
    declarations: [
		AppComponent
    ],
    providers: [
        AuthenticationService
    ],
	bootstrap: [AppComponent]
})
export class AppModule { }

