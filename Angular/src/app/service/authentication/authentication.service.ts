import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/signInData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockedUser = new SignInData("testUser@gmail.com", "test123");
  isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(signInData: SignInData): boolean{
    if(this.checkCredentials(signInData)){
      this.isAuthenticated = true;
      //on Authentication navigate to "Home"
      this.router.navigate(['friend']);
      return true;
    }
    else{
    this.isAuthenticated = false;
    return false;
    }
  }

  private checkCredentials(signInData: SignInData): boolean{
    //This is where we're going to enter a service to check the username/password
    return this.checkUserName(signInData.getUsername()) && this.checkPassword(signInData.getPassword());
  }

  private checkUserName(username: string): boolean{
    console.log("Authenticating: " + username);
    return username === this.mockedUser.getUsername();
  }

  private checkPassword(password: string): boolean{
    return password === this.mockedUser.getPassword();
  }


  logout(){
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }


}
