import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-chair',
  templateUrl: './chair.component.html',
  styleUrls: ['./chair.component.css']
})
export class ChairComponent implements OnInit {

  constructor(private http: HttpClient) { }
  chair = {name:' ',description:' '}
  onSubmit(){
    var name = this.chair.name;
    var description = this.chair.description; 
    let obs = this.http.post("http://192.168.0.120:8005/chair/",{name: name , description: description});
    obs.subscribe((response) => console.log(response),(error)=>console.log(error));
     
   }
  
  // onGetData() {
  //   var id = this.chair.chair_id;
  //   let obs = this.http.post("http://192.168.0.120:8005/chair/"+id);
  //   //alert("insert");
  //   obs.subscribe((response) => console.log(response),(error)=>console.log(error));
  // }
  ngOnInit() {
  }

}