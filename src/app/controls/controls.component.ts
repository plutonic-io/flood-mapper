import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  selectedRegion = 'rio-salado';
  selectedOverlay = 'flood_extent_composite';
  selectedComposite = 'population_affected';
  selectedBackground = 'landsat8_2005';
  showComposite = true;
  showBackground = true;
  showOverlay = true;
  constructor() { }

  ngOnInit() {
  }

}
