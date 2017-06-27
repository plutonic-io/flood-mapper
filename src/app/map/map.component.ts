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

  public setOverlay(tileurl: string) {
    let mapType = new google.maps.ImageMapType({
      getTileUrl: function(coords: google.maps.Point, zoom: number) {
        return tileurl.replace('{z}', zoom.toString())
                      .replace('{x}', coords.x.toString())
                      .replace('{y}', coords.y.toString())
      },
      tileSize: new google.maps.Size(256,256)
    });
    this.map.overlayMapTypes.setAt(1,mapType);
  }


  ngOnInit() {
    const self = this;
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
