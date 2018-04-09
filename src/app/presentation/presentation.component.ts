import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
public items: Array<any>= [];

    constructor() {
          this.items=[
                       {name:'assets/img/uno.jpg'},
                       {name:'assets/img/dos.png'},
                       {name:'assets/img/tres.png'},
                       {name:'assets/img/uno.jpg'},
                       {name:'assets/img/dos.png'},
                       {name:'assets/img/tres.png'},
                       {name:'assets/img/uno.jpg'},
                       {name:'assets/img/dos.png'},
                       {name:'assets/img/uno.jpg'},
                       {name:'assets/img/dos.png'},
                       {name:'assets/img/tres.png'},
                       {name:'assets/img/uno.jpg'},
                       {name:'assets/img/dos.png'},
                       {name:'assets/img/tres.png'},
                       {name:'assets/img/uno.jpg'},
                       {name:'assets/img/dos.png'},
                     ];

    }

    ngOnInit() {
    }

}
