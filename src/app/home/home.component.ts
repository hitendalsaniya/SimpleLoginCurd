import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIServicService } from '../api-servic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _http:APIServicService, private rout:ActivatedRoute) { }

  public studentList:any=[]
  public id:any

  ngOnInit(): void {
    this.id = this.rout.snapshot.paramMap.get('id');

    this._http.GetUsersFromApi().subscribe(res=>{
      this.studentList = res
    })
  }
  deleteStudnet(id:any){
    this._http.deleteStudent(id).subscribe(res=>{
      this.studentList = res
    })
  }
}
