import { Component, OnInit, OnDestroy } from '@angular/core';
import { BokehService } from './../../services/bokeh.service';

@Component({
  selector: 'app-bokeh-chart',
  templateUrl: './bokeh-chart.component.html',
  styleUrls: ['./bokeh-chart.component.css']
})
export class BokehChartComponent implements OnInit, OnDestroy {
  public id: string;

  constructor(
    private bokehService: BokehService) { }


 ngOnInit() {
     this.id = String(Math.floor(Math.random() * Math.floor(9000)) + 1000);
     console.log('do bokeh plot');
     this.bokehService.getChart(this.id);
 }
 
  ngOnDestroy() {
    const element = document.getElementById(this.id);
    console.log(`remove bokeh plot ${element}`);
    element.parentNode.removeChild(element);
  }
}
