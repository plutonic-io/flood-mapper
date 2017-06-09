import { Component, OnInit } from '@angular/core';
import { GoogleMapsApiService } from '../google-maps-api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map: google.maps.Map;

  constructor() { }

  ngOnInit() {
    GoogleMaps.createClient({key: 'AIzaSyDWC3DTCJV37Ll9xNQetqne7hV-Zvg8yRg'})
  }

}
