import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //CHECKS IF USER IS AUTHENTICATED - IF NOT THEY ARE UNABLE TO GO TO AFTER-CAKE/FRIEND OR AFTER-CAKE/GIFTS
    //THEY WILL BE AUTOMATICALLY ROUTED BACK TO LOGIN PAGE      
      if(this.authenticationService.isAuthenticated){
        return true;
      }
      else{
        this.router.navigate(['']);
        return false;
      }
  }
  
}
