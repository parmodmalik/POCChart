import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
declare let d3: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // include original styles
  styleUrls: [
    '../../node_modules/nvd3/build/nv.d3.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  title = 'app';
  options;
  data;
  ngOnInit() {

    this.options = {
        chart: {
            type: 'discreteBarChart',
            height: 450,
            margin : {
                top: 20,
                right: 20,
                bottom: 150,
                left: 175
            },
            
            x: function(d){ return d.label; },
            y: function(d){ return d.value; },
            //showValues: true,
            valueFormat: function(d){
                return d3.format(',.4f')(d);
            },
            transitionDuration: 500,
            xAxis: {
                axisLabel: 'X Axis',
                rotateLabels: -45
            },
            yAxis: {
                axisLabel: 'Y Axis',
                axisLabelDistance: 30
            }
            
        }
    };
this.data = [{
    key: "Cumulative Return",
    values: [
        {"label":"Reporting & Analytics","value":7,"color":"#A32A2E"},{"label":"Product Development/Project Request","value":70,"color":"#A32A2E"},{"label":"Member/Provider Communications","value":4,"color":"#A32A2E"},{"label":"Government Programs","value":16,"color":"#A32A2E"},{"label":"Claim Operations","value":11,"color":"#A32A2E"},{"label":"Formulary","value":6,"color":"#A32A2E"},{"label":"Benefit Administration","value":12,"color":"#A32A2E"},{"label":"Eligibility","value":3,"color":"#A32A2E"},{"label":"Provider Relations","value":27,"color":"#A32A2E"},{"label":"External User Access","value":8,"color":"#A32A2E"},{"label":"Pharmacy Account Management","value":9,"color":"#A32A2E"},{"label":"Prior Authorization","value":5,"color":"#A32A2E"},{"label":"Financial","value":16,"color":"#A32A2E"},{"label":"Enterprise Data Management","value":4,"color":"#A32A2E"},{"label":"Retail Network","value":7,"color":"#A32A2E"},{"label":"Other","value":4,"color":"#A32A2E"},{"label":"File Extracts, Loads and Layouts","value":1,"color":"#A32A2E"},{"label":"Clinical Consulting","value":1,"color":"#A32A2E"}
        
    ]
}];
    
}
  /*  this.options = {
      chart: {
        type: 'pieChart',
        height: 500,
        x: function(d){return d.key;},
        y: function(d){return d.y;},
        showLabels: true,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
        legend: {
            margin: {
                top: 5,
                right: 35,
                bottom: 5,
                left: 0
            }
        }
}
    }
    this.data = [
      {
        key: "One",
        y: 5
    },
    {
        key: "Two",
        y: 2
    },
    {
        key: "Three",
        y: 9
    },
    {
        key: "Four",
        y: 7
    },
    {
        key: "Five",
        y: 4
    },
    {
        key: "Six",
        y: 3
    },
    {
        key: "Seven",
        y: .5
}
    ];*/
  }

