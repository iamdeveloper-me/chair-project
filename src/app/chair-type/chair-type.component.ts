import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-chair-type',
  templateUrl: './chair-type.component.html',
  styleUrls: ['./chair-type.component.css']
})
export class ChairTypeComponent implements OnInit {

  
  constructor(private http: HttpClient) { }
  chair = {name:' ',description:' ',part_type:' ',chair:' ',parent_id:''}
  onSubmit(){
    //console.log(user);
    //let Form = JSON.stringify(this.user);
    //console.log(Form);
    var name = this.chair.name;
    var description = this.chair.description; 
    var part_type = this.chair.part_type;
    var chair_id = this.chair.chair;
    var parent_id = this.chair.parent_id;
    let obs = this.http.post("http://192.168.0.120:8005/chairtype/",{name: name , description: description,part_type: part_type,chair:chair_id,parent_id:parent_id});
    //alert("insert");
    obs.subscribe((response) => console.log(response),(error)=>console.log(error));
  }   
  ngOnInit() {
  }

}
