import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './components/login/login.component';
import {UserListComponent} from './components/user-list/user-list.component'
import {UpdateuserformComponent} from './components/updateuserform/updateuserform.component';
import {NewuserformComponent} from './components/newuserform/newuserform.component';
import {MachineListComponent} from './components/machine-list/machine-list.component';
import {CreateMachineFormComponent} from './components/create-machine-form/create-machine-form.component';
import {ErrorListComponent} from './components/error-list/error-list.component';

const routes: Routes = [
	{path: '', redirectTo: 'login', pathMatch: 'full'},
	{path: 'login', component: LoginComponent},
	{path: 'userList', component: UserListComponent},
	{path: 'newUser', component: NewuserformComponent},
	{path: 'updateUser', component: UpdateuserformComponent},
	{path: 'myMachines', component: MachineListComponent},
	{path: 'newMachine', component: CreateMachineFormComponent},
	{path: 'errors', component: ErrorListComponent},
	{path: '**', component: LoginComponent} // todo change to 404 not found component
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
		HttpClientModule
	],
	exports: [RouterModule]
})

export class AppRoutingModule {
}
