import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})
export class PartComponent implements OnInit {

  // constructor() { }

  ngOnInit() {
  }
   

   user = { name: "" , description: ""}

 constructor(private http: HttpClient){ } 

      onSubmit(user){
               var username = this.user.name;
               var userdescription = this.user.description;
               let obs = this.http.post("http://192.168.0.120:8005/part/",{ name: username,description: userdescription}); 
               obs.subscribe((response) => console.log(response),(error)=>console.log(error));
       }

}
