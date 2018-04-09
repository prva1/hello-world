import { Component, OnInit } from '@angular/core';
import { UserService } from "../service/user.service";
import { Observable } from "rxjs/Observable";
import { DataSource } from "@angular/cdk/collections";
import { User } from "../models/user.model";
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public dataSource= new UserDataSource(this.userService);

  public displayedColumns= ['name', 'email','phone','company'];

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

selectedRowIndex: number = -1;

highlight(row){
    this.selectedRowIndex = row.id;
}

}

export class UserDataSource extends DataSource<any>{

  constructor(private userService:UserService){
    super();
  }

  _getArray: User[];

connect(): Observable<User[]>{
  this.userService.getUser()
  .subscribe(
      resultArray => this._getArray = resultArray,
      error => console.log("Error :: " + error)
  )
  return  this.userService.getUser();
  
}

/* getPosts(): void {
  this.apiSerivce.getPosts()
      .subscribe(
          resultArray => this._postsArray = resultArray,
          error => console.log("Error :: " + error)
      )
} */

disconnect(){}
}

