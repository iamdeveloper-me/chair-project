import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-part-type',
  templateUrl: './part-type.component.html',
  styleUrls: ['./part-type.component.css']
})
export class PartTypeComponent implements OnInit {

  ngOnInit() {
  }
   

   user = { name: "" , description: "", part: "", quantity_item: "",price_item: ""}

 constructor(private http: HttpClient){ } 

      onSubmit(user){
               var user1name = this.user.name;
               var user1description = this.user.description;
               var user1part = this.user.part;
               var user1quantity_item = this.user.quantity_item;
               var user1price_item = this.user.price_item;

               let obs = this.http.post("http://192.168.0.120:8005/parttype/",{ name: user1name,description: user1description, part: user1part, quantity_item: user1quantity_item, price_item: user1price_item}); 
               obs.subscribe((response) => console.log(response),(error)=>console.log(error));
       }

}
