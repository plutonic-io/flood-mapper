import { Component, OnInit, ElementRef } from '@angular/core';
import { GoogleMapsApiService } from '../google-maps-api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map: google.maps.Map;
  constructor(private node: ElementRef) { }
  ngOnInit() {
    let self = this;
    GoogleMapsApiService.load('AIzaSyDWC3DTCJV37Ll9xNQetqne7hV-Zvg8yRg')
    .then(function(e) {
      self.map = new google.maps.Map(
        self.node.nativeElement,
        { center: new google.maps.LatLng(-32.5, -60.5),
          streetViewControl: false,
          zoom: 6
      }
      );

    });
  }

}
