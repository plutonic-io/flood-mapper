import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdGridListModule, MdToolbarModule, MdButtonModule, MdMenuModule, 
        MdCheckboxModule, MdCardModule, MdSelectModule, MdIconModule } from '@angular/material'; 
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { TableComponent } from './table/table.component';
import { ChartComponent } from './chart/chart.component';
import { ControlsComponent } from './controls/controls.component';
import { ToolbarComponent } from './toolbar/toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    TableComponent,
    ChartComponent,
    ControlsComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdGridListModule, MdToolbarModule, MdButtonModule, MdMenuModule, 
        MdCheckboxModule, MdCardModule, MdSelectModule, MdIconModule,  
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
