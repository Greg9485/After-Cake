import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { SignInData } from "../model/signInData";
import { AuthenticationService } from "../service/authentication/authentication.service";

@Component({
    selector: 'cf-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
    
    isFormInvalid = false;
    areCredentialsInvalid = false;

    constructor(private authenticationService: AuthenticationService) {}

    ngOnInit(): void {
        
    }

    onSubmit(signInForm: NgForm){
        if(!signInForm.valid){
            this.isFormInvalid = true;
            this.areCredentialsInvalid = false;
            return;
        }
        this.checkCredentials(signInForm);
    }

    private checkCredentials(signInForm: NgForm){
        const signInData = new SignInData(signInForm.value.username, signInForm.value.password);
        if(!this.authenticationService.authenticate(signInData)){
            this.isFormInvalid = false;
            this.areCredentialsInvalid = true;
        }
    }

}