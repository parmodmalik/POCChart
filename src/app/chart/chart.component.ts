import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// declare let d3: any;
import * as d3 from 'd3';

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['../../../node_modules/nvd3/build/nv.d3.css'],
    encapsulation: ViewEncapsulation.None
})
export class ChartComponent implements OnInit {
    title = 'app1';
    options;
    data;
    ngOnInit() {

        this.options = {
            chart: {
                type: 'discreteBarChart',
                id: 'VerticalBarChart',
                // enableTooltip: false,
                height: 400,
                margin: {
                    top: 20,
                right: 20,
                bottom: 150,
                left: 175
                },
                x: function (d) { return d.label; },
                y: function (d) { return d.value; },
                //showValues: true,
                valueFormat: function (d) {
                    return d3.format('f')(d);
                },
                transitionDuration: 500,
                xAxis: {
                   // axisLabel: 'X Axis',
                    rotateLabels: -45,
                    wrapLabels: true,
                    //staggerLabels: true,
                    showXAxis: true
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: 30
                }
            }
        };

        
        this.data = [{
            key: "Cumulative Return",
            values: [{"label":"Reporting & Analytics","value":7,"color":"#A32A2E"},{"label":"Product Development/Project Request","value":70,"color":"#A32A2E"},{"label":"Member/Provider Communications","value":4,"color":"#A32A2E"},{"label":"Government Programs","value":16,"color":"#A32A2E"},{"label":"Claim Operations","value":11,"color":"#A32A2E"},{"label":"Formulary","value":6,"color":"#A32A2E"},{"label":"Benefit Administration","value":12,"color":"#A32A2E"},{"label":"Eligibility","value":3,"color":"#A32A2E"},{"label":"Provider Relations","value":27,"color":"#A32A2E"},{"label":"External User Access","value":8,"color":"#A32A2E"},{"label":"Pharmacy Account Management","value":9,"color":"#A32A2E"},{"label":"Prior Authorization","value":5,"color":"#A32A2E"},{"label":"Financial","value":16,"color":"#A32A2E"},{"label":"Enterprise Data Management","value":4,"color":"#A32A2E"},{"label":"Retail Network","value":7,"color":"#A32A2E"},{"label":"Other","value":4,"color":"#A32A2E"},{"label":"File Extracts, Loads and Layouts","value":1,"color":"#A32A2E"},{"label":"Clinical Consulting","value":1,"color":"#A32A2E"}]
        }];


    }

   
}
