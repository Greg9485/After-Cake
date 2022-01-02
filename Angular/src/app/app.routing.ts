import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FriendComponent } from './friend';
import { GiftComponent } from './gift';
import { LoginComponent } from './login';

import { AuthGuard } from "./guards/auth.guard";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'user', component: UserComponent, canActivate:[AuthGuard]},
    { path: 'friend', component: FriendComponent, canActivate:[AuthGuard] },
    { path: 'gift', component: GiftComponent, canActivate:[AuthGuard]},

    //otherwise redirect to home
    { path: '**', redirectTo: ''}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {};
export const appRoutingModule = RouterModule.forRoot(routes);
