import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NvD3Module } from 'ng2-nvd3';

import 'd3';
import 'nvd3';
import { ChartComponent } from './chart/chart.component';
import { Chart1Component } from './chart1/chart1.component';
import { Chart2Component } from './chart2/chart2.component';

@NgModule({
  
  declarations: [
    AppComponent,
    ChartComponent,
    Chart1Component,
    Chart2Component
  ],
  imports: [
    BrowserModule,
    NvD3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
