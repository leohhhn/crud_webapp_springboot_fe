import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {LoginComponent} from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import {NewuserformComponent} from './components/newuserform/newuserform.component';
import {UpdateuserformComponent} from './components/updateuserform/updateuserform.component';
import { MachineListComponent } from './components/machine-list/machine-list.component';
import { CreateMachineFormComponent } from './components/create-machine-form/create-machine-form.component';
import { ErrorListComponent } from './components/error-list/error-list.component';

@NgModule({
	declarations: [
		AppComponent,
		UserListComponent,
		NavbarComponent,
		LoginComponent,
		UpdateuserformComponent,
		NewuserformComponent,
  MachineListComponent,
  CreateMachineFormComponent,
  ErrorListComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}

// TODO MAIN TASKS LEFTOVER at 30th dec:
// 	search table with machines
// 	implement restarting
// 	implement locks
//  implement scheduling
//  implement errors






