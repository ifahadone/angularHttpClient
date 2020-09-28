import { Component, OnInit } from '@angular/core';
import {DataService } from '../app/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularHttpClient';
  products = [];
  
  constructor(private dataService: DataService) { }

  ngOnInit() {

  }
 
  clickFunction() {

  //  alert(this.title);
    
    this.dataService.sendGetRequest(this.title).subscribe((data: any[])=>{
      this.products=data;
    })  

  }

}
