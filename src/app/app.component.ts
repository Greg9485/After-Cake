import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Optional } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user/user';
import { UserService } from './user/user.service';
import { Friend } from './friend/friend';
import { FriendService } from './friend/friend.service';
import { Gift } from './gift/gift';
import { GiftService } from './gift/gift.service';
import { AuthenticationService } from './service/authentication/authentication.service';
import { FriendComponent } from './friend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{// implements OnInit{
  title = 'AfterCake';
  
  constructor(public authenticationService: AuthenticationService, public friendService: FriendService, public giftService: GiftService){}

  logout(){
    this.authenticationService.logout();
  }

}

/******************************************************
 * 
 *          ALL CODE BELOW IS COPIED IN 
 *            USER/USERCOMPONENT.TS
 * 
 ****************************************************** / 
  public users: User[];
  public editUser: User|undefined;
  public deleteUser: User|undefined;

  //Do we need another AppComponent? Can 1 constructor be used for multiple compnents? See constructor below
/*NEED TO MAKE A FRIENDS.COMPONENT.TS & A GIFTS.COMPONENT.TS
  public friends: Friend[];
  public editFriend: Friend|undefined;
  public deleteFriend: Friend|undefined; 
* /

  constructor(private userService: UserService){
    this.users = []
  }

  ngOnInit(){
      this.getUsers();
  }

  public getUsers(): void{
    this.userService.getUsers().subscribe(
      (response: User[]) =>{
        this.users = response; 
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  public onAddUser(addForm: NgForm): void{
    document.getElementById('add-user-form')?.click();
    this.userService.addUser(addForm.value).subscribe(
      (response: User)=>{
        console.log(response);
        this.getUsers();
        addForm.reset();
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateUser(user: User): void{
    this.userService.updateUser(user).subscribe(
      (response: User)=>{
        console.log(user);
        this.getUsers();
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  public onDeleteUser(userId: number): void{
    this.userService.deleteUser(userId).subscribe(
      (response: void)=>{
        console.log(response);
        this.getUsers();
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  public searchUsers(key: string): void{
    const results: User[]=[];
    for(const user of this.users){
      if(user.firstName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ||user.lastName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ||user.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ||user.userName.toLowerCase().indexOf(key.toLowerCase()) !== -1){
        results.push(user);
      }
    }
    this.users = results;
    if(results.length === 0 || !key){
      this.getUsers();
    }
  }

  public onOpenModal(user: User|undefined, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'signUp'){
      button.setAttribute('data-target', '#signUpModal');
    }else if(mode === 'signIn'){
      this.editUser = user;
      button.setAttribute('data-target', '#signInModal');
    }/*else if(mode === 'delete'){
      this.deleteUser = user;
      button.setAttribute('data-target', '#deleteUserModal');
    }* /
    if(container != null){
      container.appendChild(button);
      button.click();
    }
  }

}*/
