import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from "../models/user.model";
import { SortuserService } from '../service/sortuser.service';
import { MatTableDataSource, MatSort, MatSortable, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-sortuser-date-table',
  templateUrl: './sortuser-date-table.component.html',
  styleUrls: ['./sortuser-date-table.component.css']
})
export class SortuserDateTableComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  /* ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  } */
  
  /** @internal */ goTo(p: number) { this.paginator.pageIndex = p; }

  public dataSource;

  public displayedColumns= ['name', 'email','phone','company'];

  constructor(private SortUserService:SortuserService) { }

  ngOnInit() {
    this.SortUserService.getUser().subscribe(results=>{
      if (!results){
        return;
      } 

      this.dataSource= new MatTableDataSource<User>(results);
      this.dataSource.sort= this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

}
