import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingModule }  from './app.routing';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FriendComponent } from './friend';
import { GiftComponent } from './gift';
import { LoginComponent } from './login/login.component';
import { UserService } from './user/user.service';
import { FriendService } from './friend/friend.service';
import { GiftService } from './gift/gift.service';
import { HomeComponent } from './home/home.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    UserComponent,
    FriendComponent,
    GiftComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    appRoutingModule
  ],
  providers: [UserService, FriendService, GiftService],
  bootstrap: [AppComponent]
})
export class AppModule { }
