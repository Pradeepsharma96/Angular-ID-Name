import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // constructor (http:HttpClient)
  title = 'my-app';


  // this.http.post('http://localhost:5000/addproducts')
  // .subcribe((result)=>{
  //  console.log("result",result)
  // })

}

//   onSubmit(data)
// {
//   console.warn(data);
// }
