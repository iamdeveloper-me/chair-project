import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-show-chair',
  templateUrl: './show-chair.component.html',
  styleUrls: ['./show-chair.component.css']
})
export class ShowChairComponent implements OnInit {
  bird_obj = [];
  chairArray:string[];
  constructor(private http: HttpClient) { }
  ngOnInit() {
    let obs = this.http.get("http://192.168.0.120:8005/chair/");

    obs.subscribe(data => {
      this.chairArray =data as string[];
    })
    
  }
  delete(chairId){
    let obs = this.http.delete("http://192.168.0.120:8005/chair/"+chairId);
    obs.subscribe((response) => console.log(response),(error)=>console.log(error));
  }

  openModel(b){ this.bird_obj = b; console.log(b); } 
  
  upForm(f){ 
    console.log(f); 
    var chairId = f.value.b_id;
     var chairName = f.value.name; 
     var chairDes = f.value.description; 
     console.log(f.value.description); 
     let obs = this.http.put("http://192.168.0.120:8005/chair/"+chairId ,{name: chairName ,description: chairDes }); 
     obs.subscribe((response) => console.log(response),(error)=>console.log(error)); }
}


