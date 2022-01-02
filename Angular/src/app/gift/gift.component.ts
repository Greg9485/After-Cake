import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Optional } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Gift } from './gift';
import { GiftService } from './gift.service';
@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['gift.component.css']
})
export class GiftComponent implements OnInit{
  title = 'Gift';
  public gifts: Gift[];
  public editGift: Gift|undefined;
  public deleteGift: Gift|undefined;

  //Do we need another AppComponent? Can 1 constructor be used for multiple compnents? See constructor below
/*NEED TO MAKE A FRIENDS.COMPONENT.TS & A GIFTS.COMPONENT.TS
  public friends: Friend[];
  public editFriend: Friend|undefined;
  public deleteFriend: Friend|undefined; 
*/
  constructor(private giftService: GiftService){
    this.gifts = []
  }

  ngOnInit(){
      this.getGifts();
  }

  public getGifts(): void{
    this.giftService.getGift().subscribe(
      (response: Gift[]) =>{
        this.gifts = response; 
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  public onAddGift(addForm: NgForm): void{
    document.getElementById('add-gift-form')?.click();
    this.giftService.addGift(addForm.value).subscribe(
      (response: Gift)=>{
        console.log(response);
        this.getGifts();
        addForm.reset();
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateGift(gift: Gift): void{
    this.giftService.updateGift(gift).subscribe(
      (response: Gift)=>{
        console.log(gift);
        this.getGifts();
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  public onDeleteGift(giftId: number): void{
    this.giftService.deleteGift(giftId).subscribe(
      (response: void)=>{
        console.log(response);
        this.getGifts();
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  public searchGifts(key: string): void{
    const results: Gift[]=[];
    for(const gift of this.gifts){
      if(gift.name.toLowerCase().indexOf(key.toLowerCase()) !== -1)
        results.push(gift);
    }
    this.gifts = results;
    if(results.length ===0 || !key){
      this.getGifts();
    }
  }

  public onOpenGiftModal(gift: Gift|undefined, mode: string): void{
    const container = document.getElementById('main-gift-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'add'){
      button.setAttribute('data-target', '#addGiftModal');
    }else if(mode === 'edit'){
      this.editGift = gift;
      button.setAttribute('data-target', '#editGiftModal');
    }else if(mode === 'delete'){
      this.deleteGift = gift;
      button.setAttribute('data-target', '#deleteGiftModal');
    }
    if(container != null){
      container.appendChild(button);
      button.click();
    }
  }
}