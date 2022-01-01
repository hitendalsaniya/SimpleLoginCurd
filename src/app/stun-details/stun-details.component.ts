import { Component, OnInit } from '@angular/core';
import { APIServicService } from '../api-servic.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-stun-details',
  templateUrl: './stun-details.component.html',
  styleUrls: ['./stun-details.component.css']
})
export class StunDetailsComponent implements OnInit {

  public student:any = [];
  public id:any = null;

  constructor(private _http:APIServicService, private _rout:ActivatedRoute, private _router:Router) { }

  ngOnInit(): void {
    this.id=this._rout.snapshot.paramMap.get('id')

    this._http.GetSutdentDetails(this.id).subscribe(res => {
      this.student = res
    })
  }

  deleteAStudent(id:any){
    this._http.deleteStudent(id).subscribe((response)=>{
      this._router.navigate(['home'])
    })
  }
  editDetails(id:any){
    this._router.navigate(['./student/edit',id])
  }

}
