

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../shared/models/user';

//import { AccountService, AlertService } from '@app/_services';

@Component({ templateUrl: 'login.component.html' , styleUrls: ['login.component.css']})
export class LoginComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    crntUser:User;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService:AuthenticationService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

  onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        const { email, passowrd } = this.form.value;

        this.loading = true;
        

        this.authenticationService.authenticateUser(email, passowrd).subscribe(
          (authenticatedUser) => { console.log(authenticatedUser),this.crntUser = authenticatedUser ;
            console.log("authenticated user:",authenticatedUser); 
            this.router.navigate(['home']);
            },error => {
                this.alertService.error(error);
                this.loading = false;
            }); 
    }
}