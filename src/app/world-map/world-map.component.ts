import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import * as d3 from "d3";
import * as d3 from "assets/libs/d3.v4.min.js"
import * as topojson from "assets/libs/topojson.js"

@Component({
  selector: 'app-world-map',
  template: `<div>
              <select #projSelect (change)="selectProjection(projSelect.value)">
                <option *ngFor="let projection of projections" value={{projection}}>{{projection}}</option>
              </select>
            </div>
            <div #world><p>{{name}}</p></div>`,
  styleUrls: ['./world-map.component.css']
})
export class WorldMapComponent implements OnInit {
  @ViewChild('world') private chartContainer: ElementRef;
  private htmlElement;
  private name;
  private projection;
  private projections = [d3.geoAzimuthalEqualArea(), 
    d3.geoAzimuthalEquidistant(),
    d3.geoGnomonic(),
    d3.geoOrthographic(),
    d3.geoStereographic(),
    d3.geoAlbersUsa(),
    d3.geoAlbers(),
    d3.geoConicConformal(),
    d3.geoConicEqualArea(),
    d3.geoConicEquidistant(),
    d3.geoMercator().scale(50),
    d3.geoTransverseMercator(),
    d3.geoNaturalEarth1(),
    d3.geoConicEquidistant()];

  constructor() { }

  ngOnInit() {
    this.htmlElement = this.chartContainer.nativeElement;
    console.log(this.htmlElement);

    var width = window.innerWidth,
    height = window.innerHeight,
    centered,
    clicked_point;

    this.projection = d3.geoAzimuthalEqualArea();
    var projection = this.projection;


    // var projection = d3.geoAzimuthalEqualArea();
    // var projection = d3.geoAzimuthalEquidistant();
    // var projection = d3.geoGnomonic();
    // var projection = d3.geoOrthographic();
    // var projection = d3.geoStereographic();
    // var projection = d3.geoAlbersUsa();
    // var projection = d3.geoAlbers();
    // var projection = d3.geoConicConformal();
    // var projection = d3.geoConicEqualArea();
    // var projection = d3.geoConicEquidistant();
    // var projection = d3.geoMercator().scale(50);
    // var projection = d3.geoTransverseMercator();
    // var projection = d3.geoNaturalEarth1();
    // var projection = d3.geoConicEquidistant();

        
    var plane_path = d3.geoPath()
            .projection(projection);

    var svg = d3.select(this.htmlElement).append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("class", "map");
        
    var g = svg.append("g");
    var path = d3.geoPath()
        .projection(projection);
        
    // load and display the World
    // d3.json("https://unpkg.com/world-atlas@1/world/110m.json", function(error, topology) {
      d3.json("./assets/world-110m.json", function(error, topology) {
      
        g.selectAll("path")
          .data(topojson.feature(topology, topology.objects.countries)
              .features)
          .enter()
          .append("path")
          .attr("d", path)
          ;
    });
  }
  
  private selectProjection(projections, index:number){
    return projections[index];
  }
  

}


