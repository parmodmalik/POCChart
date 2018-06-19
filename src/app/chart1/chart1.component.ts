import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare let d3: any;
@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['../../../node_modules/nvd3/build/nv.d3.css'],
  encapsulation : ViewEncapsulation.None
})
export class Chart1Component implements OnInit {
  title = 'app2';
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
        {"label":"Claim Operations","value":11,"color":"#A32A2E"},{"label":"Formulary","value":6,"color":"#A32A2E"},{"label":"Benefit Administration","value":12,"color":"#A32A2E"},{"label":"Eligibility","value":3,"color":"#A32A2E"},{"label":"Provider Relations","value":27,"color":"#A32A2E"},{"label":"External User Access","value":8,"color":"#A32A2E"},{"label":"Pharmacy Account Management","value":9,"color":"#A32A2E"},{"label":"Prior Authorization","value":5,"color":"#A32A2E"},{"label":"Financial","value":16,"color":"#A32A2E"},{"label":"Enterprise Data Management","value":4,"color":"#A32A2E"},{"label":"Retail Network","value":7,"color":"#A32A2E"}
        
    ]
}];
    
}

}
