import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class APIServicService {

  ApiUrl:any="http://localhost:3000/student"

  constructor(private _http:HttpClient) { }

  GetUsersFromApi(){
    return this._http.get(this.ApiUrl)
   }

  GetSutdentDetails(id:any){
    return this._http.get(this.ApiUrl+"/"+id)
  }

  deleteStudent(id:any){
    return this._http.delete(this.ApiUrl+"/"+id)
  }

  addNew(getForm:any){
    return this._http.post(this.ApiUrl,getForm)
  }

  update(getForm:any,id:any){
    return this._http.put(this.ApiUrl+"/"+id,getForm)
  }

}


