import { Component, OnInit } from '@angular/core';
import { APIServicService } from '../api-servic.service';
import { Router, ActivatedRoute } from '@angular/router';
import { addEdit } from '../Class/AddEdit';



@Component({
  selector: 'app-add-student',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  constructor(private _api:APIServicService, private _route:Router, private _activatedRoute:ActivatedRoute, ) { addEdit:addEdit }

  studnet : addEdit = new addEdit; 
  id :any= null;

  ngOnInit(): void {
     this.id = this._activatedRoute.snapshot.paramMap.get('id');

     //-----calling api below for edit------
    if(this.id !== null){
      this._api.GetSutdentDetails(this.id).subscribe((res:any)=>{
        this.studnet = res
        console.log(res)
      })
    }
    //edit form end
  }

  
  
  addEdit(getForm:any){
    if(this.id === null){
      this._api.addNew(getForm).subscribe((response:any)=>{
        response = this._route.navigate(['../home'])
      });
    }else{
      this._api.update(getForm,this.id).subscribe((responnse)=>{
        responnse = this._route.navigate(['../../../home'])
      })
    }
  }
}
