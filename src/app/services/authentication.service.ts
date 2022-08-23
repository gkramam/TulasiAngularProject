import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

// perform HTTP requests to the server to carry out CRUD (Create, Read, Update, Delete) operations on data
  //This can be performed using the httpclient service , which is available as an injectable class

  //The HttpClientModule is a service module provided by Angular that 
  //allows us to perform HTTP requests and easily manipulate those requests and their responses.
  //To configure the HttpClientModule and create the authenticate_user service,
  // First, we need to import the HttpClientModule inside the app.module.ts file and then 
  // place it inside imports array: 

  //HttpClient is being injected into AuthenticateUserService using constructor injection.
  constructor(private httpClient:HttpClient) {
    
  }
  baseUrl: string = "http://localhost:8080/api/users"; //end point 

  authenticateUser(email:string,  password:string){
   http://localhost:8080/api/users/itsmetulsi@gmail.com/pass
      return this.httpClient.get<User>(this.baseUrl+"/"+email+"/"+password);
     //return this.httpClient.get<LogIn>("http://localhost:8080/api/users/itsmetulsi@gmail.com/pass")
  }
  signUp( user:User){
   return this.httpClient.post<User>(this.baseUrl,user);
  }
}
