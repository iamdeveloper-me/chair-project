import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
 const headers: {
        'Authorization':'Basic ',
        'Content-Type':'application/json'
    },

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
               this.http.post("http://192.168.0.120:8005/login/",{ username: useremail, password: userpassword},{headers}).subscribe((res)=>{
                console.log(res)
               }); 
              
       }

}