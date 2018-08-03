import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-showparttype',
  templateUrl: './showparttype.component.html',
  styleUrls: ['./showparttype.component.css']
})
export class ShowparttypeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  user = { name: " " , description: "" ,id: "",part: "",quantity_item: ""}
  arrBirds: string [];
  bird_obj = [];
  ngOnInit() {
                alert("dv");
                let obs = this.http.get("http://192.168.0.120:8005/parttype/"); 
                obs.subscribe( data => {
                this.arrBirds = data as string []; 
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      });
  }

delete(x){
            let obs = this.http.delete("http://192.168.0.120:8005/parttype/"+x); 
            obs.subscribe((response) => console.log(response),(error)=>console.log(error));
        }

openModel(b){   
              this.bird_obj = b;   
            } 
upForm(f){

  console.log(f)
            var u = f.value.b_id;
            var e = f.value.username;
            var j = f.value.description;
            var k = f.value.part;
            var m = f.value.quantity_item 
                
            let obs = this.http.put("http://192.168.0.120:8005/parttype/"+u ,{name: e ,description: j, part: k, quantity_item:m });            
            obs.subscribe((response) => console.log(response),(error)=>console.log(error));
        } 
}
