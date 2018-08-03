import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-chair-type',
  templateUrl: './show-chair-type.component.html',
  styleUrls: ['./show-chair-type.component.css']
})
export class ShowChairTypeComponent implements OnInit {
  chair_obj = [];
  chairArray:string[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    let obs = this.http.get("http://192.168.0.120:8005/chairtype/");

    obs.subscribe(data => {
      this.chairArray =data as string[];
    })
    
  }
  delete(chairTypId){
    let obs = this.http.delete("http://192.168.0.120:8005/chairtype/"+chairTypId);
    obs.subscribe((response) => console.log(response),(error)=>console.log(error));
  }

  openModel(b){ this.chair_obj = b; console.log(b); } 
  
  upForm(f){ 
    console.log(f); 
     var chairTypId = f.value.b_id;
     var chairTypName = f.value.name; 
     var chairTypDes = f.value.description;
     var partTyp = f.value.part_type;
     var chairId = f.value.chair;
     var parentId = f.value.parent_id; 
     console.log(f.value.description); 
     let obs = this.http.put("http://192.168.0.120:8005/chairtype/"+chairTypId ,{name: chairTypName ,description: chairTypDes,part_type:partTyp,chair:chairId, parent_id:parentId}); 
     obs.subscribe((response) => console.log(response),(error)=>console.log(error)); }
}
