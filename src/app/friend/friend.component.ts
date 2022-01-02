import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Optional } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Friend } from './friend';
import { FriendService } from './friend.service';

@Component({
  selector: 'app-root',
  templateUrl: 'friend.component.html',
  styleUrls: ['friend.component.css']
})
export class FriendComponent implements OnInit{
  title = 'Friend';
  public friends: Friend[];
  public editFriend: Friend|undefined;
  public deleteFriend: Friend|undefined;

  //Do we need another AppComponent? Can 1 constructor be used for multiple compnents? See constructor below
/*NEED TO MAKE A FRIENDS.COMPONENT.TS & A GIFTS.COMPONENT.TS
  public friends: Friend[];
  public editFriend: Friend|undefined;
  public deleteFriend: Friend|undefined; 
*/
  constructor(private friendService: FriendService){
    this.friends = []
  }

  ngOnInit(){
      this.getFriends();
  }

  public getFriends(): void{
    this.friendService.getFriends().subscribe(
      (response: Friend[]) =>{
        this.friends = response; 
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  public onAddFriend(addForm: NgForm): void{
    document.getElementById('add-friend-form')?.click();
    this.friendService.addFriend(addForm.value).subscribe(
      (response: Friend)=>{
        console.log(response + "OnAddFriend Cliked!");
        this.getFriends();
        addForm.reset();
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateFriend(friend: Friend): void{
    this.friendService.updateFriend(friend).subscribe(
      (response: Friend)=>{
        console.log(friend);
        this.getFriends();
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  public onDeleteFriend(friendId: number): void{
    this.friendService.deleteFriend(friendId).subscribe(
      (response: void)=>{
        console.log(response);
        this.getFriends();
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  public searchFriends(key: string): void{
    const results: Friend[]=[];
    for(const friend of this.friends){
      if(friend.firstName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ||friend.lastName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ||friend.relationship.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ||friend.likes.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ||friend.dislikes.toLowerCase().indexOf(key.toLowerCase()) !== -1){
        results.push(friend);
      }
    }
    this.friends = results;
    if(results.length ===0 || !key){
      this.getFriends();
    }
  }

  public onOpenFriendModal(friend: Friend|undefined, mode: string): void{
    const container = document.getElementById('main-friend-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'add'){
      console.log("Add Friend clicked!");
      button.setAttribute('data-target', '#addFriendModal');
    }else if(mode === 'editFriend'){
      console.log("Edit Friend Clicked!")
      this.editFriend = friend;
      button.setAttribute('data-target', '#editFriendModal');
    }else if(mode === 'deleteFriend'){
      console.log("Delete Friend Clicked!")
      this.deleteFriend = friend;
      button.setAttribute('data-target', '#deleteFriendModal');
    }
    if(container != null){
      container.appendChild(button);
      button.click();
    }
  }
}