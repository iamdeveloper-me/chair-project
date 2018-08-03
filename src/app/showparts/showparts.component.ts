import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-showparts',
  templateUrl: './showparts.component.html',
  styleUrls: ['./showparts.component.css']
})
export class ShowpartsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  user = { name: " " , description: "" ,id: ""}
arrBirds: string [];
bird_obj = [];
  ngOnInit() {
  

               alert("dv");
               let obs = this.http.get("http://192.168.0.120:8005/part/"); 
               obs.subscribe( data => {
                this.arrBirds = data as string [];   // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      }
}


delete(x){
    console.log(x);
      let obs = this.http.delete("http://192.168.0.120:8005/part/"+x); 
               obs.subscribe((response) => console.log(response),(error)=>console.log(error));
        
}


 openModel(b){ 
               
             this.bird_obj = b;
            
                
 } 
 upForm(f){
   console.log(f);
  
   
   var u = f.value.b_id;
   var e = f.value.username;
   var j = f.value.description;
   
   console.log(f.value.description);
           
   let obs = this.http.put("http://192.168.0.120:8005/part/"+u ,{name: e ,description: j });            
   obs.subscribe((response) => console.log(response),(error)=>console.log(error));
  } 

 
       
 
}
