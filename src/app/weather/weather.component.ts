import {Component, OnInit} from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { Http } from '@angular/http';


@Component({
  selector: 'app-weather',
  providers: [ WeatherService ],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{

    private cityName: string;
    private cityHumid: string;
    showMeWeather: boolean = false;

    constructor(public _weatherService: WeatherService){}
     
    getSearchHumidityByCity(){

        this._weatherService.cityName = this.getcityName();
        this._weatherService.searchCity();
       
        this.cityHumid="34";
        //this.cityHumid = this._weatherService.cityHumid;
        this.showMeWeather = true;
      
    }

    getConfirmationWeather(){

    }


    ngOnInit() {
    }

    public getcityName(){
      return this.cityName;
    }

    public setcityName(name: string){
      this.cityName= name;
    }

    public getcityHumid(){
      return this.cityHumid;
    }

    public setcityHumid(cityHumid: string){
      this.cityHumid= cityHumid;
    }
}