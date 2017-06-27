import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  selectedOverlay = 'flood_duration_threshold';
  selectedBackground = 'landsat8_2005';
  showBackground = true;
  showOverlay = true;
  constructor() { }

  ngOnInit() {
  }

}
