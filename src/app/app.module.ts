import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTabsModule } from "@angular/material/tabs";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from "@angular/forms";
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';



import {CdkScrollableModule} from '@angular/cdk/scrolling';



//navigation
import {
	IgxButtonModule,
	IgxIconModule,
	IgxLayoutModule,
	IgxNavigationDrawerModule,
	IgxRadioModule,
	IgxRippleModule,
	IgxSwitchModule,
	IgxToggleModule
 } from "igniteui-angular";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import { LoginComponent } from './account/login/login.component';
import { SignupComponent } from './account/signup/signup.component';
;
import { TaskCreateComponent, ExampleHeader } from './tasks/task-create/task-create.component';
import { TaskListComponent } from './tasks/task-card/task-card.component';
import { AlertComponent } from './alert/alert.component';
import { ErrorInterceptor } from './error-interceptor';
import { AuthInterceptor } from './account/auth-interceptor';
import { ErrorComponent } from "./error/error.component";


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule, MatTabsModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatDialogModule, MatProgressSpinnerModule,
    MatDatepickerModule, MatNativeDateModule, MatButtonToggleModule, MatCardModule, MatIconModule, MatExpansionModule, MatSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    IgxButtonModule, IgxIconModule, IgxLayoutModule, IgxNavigationDrawerModule,
    IgxRadioModule,	IgxRippleModule, IgxSwitchModule,	IgxToggleModule,
    CdkScrollableModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    TaskCreateComponent,
    TaskListComponent,
    ExampleHeader,
    HeaderComponent,
    LoginComponent,
    SignupComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule {
}
;
