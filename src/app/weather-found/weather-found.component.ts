import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-found',
  templateUrl: './weather-found.component.html',
  styleUrls: ['./weather-found.component.css']
})
export class WeatherFoundComponent implements OnInit {

  @Input() showMeWeather: boolean;
  @Input() cityName: string;
  @Input() cityHumid: string;

  constructor() { }

  ngOnInit() {
  }
}
