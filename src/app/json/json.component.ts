import { Component, OnInit } from '@angular/core';
import  data from '../../assets/documents/persons.json';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from '../provider/services.service'

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})


export class JsonComponent implements OnInit {

  exreg= /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/i; 
  persons = data;
  filter = data.filter((item)=>{
    return item.address?item:null;
  });
  secondFilter:any;
  emails:any;
  constructor(private service: ServicesService) { }

  async ngOnInit(){
    this.filter.sort((a,b)=>{if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a must be equal to b
    return 0;})

    this.secondFilter = this.filter.filter((person)=>{return person.age>=20? person.age<=30? person.name[0].toLowerCase()=="h"||person.name[0].toLowerCase()=="l"?person:null:null:null });
    
    this.emails= await this.service.getEmails();
    console.log(this.emails.filter((email)=>{return this.exreg.test(email)!=true? email:null; }))
    this.emails = this.emails.filter((email)=>{return this.exreg.test(email)===true? email:null; })
    
    console.log(
      this.persons.filter(
        (person)=>{
          return this.emails.filter(
            element => {
              return person.email.includes(element)=== true ? person:null;
            }
          ).length>0?person:null; 
        }
      )
    );


   
  }

  

}
