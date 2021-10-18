import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) {}


  getEmails():Promise<String[]>{
    return new Promise((resolve, reject) =>{
      this.http.get('assets/documents/emails.json.txt', { responseType: 'text' as 'json'}).subscribe( data => {
        resolve (data.toString().split("\"").filter((email,index, array)=>{return index%2!=0?email:null;}))
      },(err)=>{reject(err)})
    })
  }
}
