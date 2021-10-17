import { Component, OnInit } from '@angular/core';
import  data from '../../assets/documents/persons.json';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})


export class JsonComponent implements OnInit {

  
   persons = data;

   filter = data.filter((item)=>{
     return item.address?item:null;
   });
   
   secondFilter:any;
  constructor() { }

  ngOnInit(): void {
    this.filter.sort((a,b)=>{if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a must be equal to b
    return 0;})

    this.secondFilter = this.filter.filter((person)=>{return person.age>=20? person.age<=30? person.name[0].toLowerCase()=="h"||person.name[0].toLowerCase()=="l"?person:null:null:null });
    console.log(this.secondFilter)
  }

  

}
