import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit() {
  }
   

   user = { email: "" , password: ""}

 constructor(private http: HttpClient){ } 

      onSubmit(user){
               var useremail = this.user.email;
               var userpassword = this.user.password;
               let obs = this.http.post("http://192.168.0.120:8005/user/",{ email: useremail, password: userpassword}); 
               obs.subscribe((response) => console.log(response),(error)=>console.log(error));
       }

}