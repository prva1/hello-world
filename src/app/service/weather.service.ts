import { Injectable, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {environment} from '../../environments/environment';

// import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
//import 'rxjs/Rx';  // use this line if you want to be lazy, otherwise:
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';  // debug
import 'rxjs/add/operator/catch';

  let LOGS=  console.log;

  @Injectable()
  export class WeatherService implements OnInit {

    cityName: string;
    cityHumid: string; 
    private _url: string;     
   

    constructor(private _http: Http ) { }

        public searchCity(){
            
            LOGS("------------------------------1:" + this.url);
            this._http.get(this.url)
            .map(res => {            
              //  const weatherCity = res.json();
             //   LOGS(">>>>>>weatherCity :" + weatherCity);
              //  this.cityHumid = weatherCity.main.humidity;

            })  // could raise an error if invalid JSON
            .do(data => console.log('server data:', data))  // debug
            .catch(this._serverError);

            /* .subscribe( (res: Response) => {
                                                const weatherCity = res.json();
                                                LOGS(">>>>>>weatherCity :" + weatherCity);
                                                this.cityHumid = weatherCity.main.humidity;
                       
                                             }
                    );
                    
                    LOGS(">>>>>>cityHumid :" + this.cityHumid);
                    LOGS("------------------------------2"); */
        }

        public getcityHumid(){
            return this.cityHumid;
        }

        public setcityHumid(cityHumid: string){
            this.cityHumid = cityHumid;
        }

        public get url(){
            this._url = environment.urlWeather.replace(environment.URL, this.cityName);
            return this._url;
        }

        public set url(weatherUrl){
            this._url = weatherUrl;
        }

        ngOnInit() {
        }

        private _serverError(err: any) {
            console.log('sever error:', err);  // debug
            if(err instanceof Response) {
              return Observable.throw(err.json().error || 'backend server error');
              // if you're using lite-server, use the following line
              // instead of the line above:
              //return Observable.throw(err.text() || 'backend server error');
            }
            return Observable.throw(err || 'backend server error');
        }
}