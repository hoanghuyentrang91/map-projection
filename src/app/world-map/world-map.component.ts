import { Component, OnInit, ViewChild, ElementRef, OnChanges } from '@angular/core';
// import * as d3 from "d3";
import * as d3 from "assets/libs/d3.v4.min.js"
import * as topojson from "assets/libs/topojson.js"

@Component({
  selector: 'app-world-map',
  template: `<div>
              <select #projSelect (change)="changeProjection($event.target.value)">
                <option *ngFor="let projection of projections" value={{projection.index}}>{{projection.name}}</option>
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
  private projections = [
    {index: 1, name: "d3.geoEquirectangular()", value: d3.geoEquirectangular()},
    {index: 2, name: "d3.geoAzimuthalEqualArea()", value: d3.geoAzimuthalEqualArea()},
    {index: 3, name: "d3.geoAzimuthalEquidistant()", value: d3.geoAzimuthalEquidistant()},
    {index: 4, name: "d3.geoGnomonic()", value: d3.geoGnomonic()},
    {index: 5, name: "d3.geoOrthographic()", value: d3.geoOrthographic()},
    {index: 6, name: "d3.geoStereographic()", value: d3.geoStereographic()},
    {index: 7, name: "d3.geoAlbersUsa()", value: d3.geoAlbersUsa()},
    {index: 8, name: "d3.geoAlbers()", value: d3.geoAlbers()},
    {index: 9, name: "d3.geoConicConformal()", value: d3.geoConicConformal()},
    {index: 10, name: "d3.geoConicEqualArea()", value: d3.geoConicEqualArea()},
    {index: 11, name: "d3.geoConicEquidistant()", value: d3.geoConicEquidistant()},
    {index: 12, name: "d3.geoMercator().scale(80)", value: d3.geoMercator().scale(80)},
    {index: 13, name: "d3.geoTransverseMercator()", value: d3.geoTransverseMercator()},
    {index: 14, name: "d3.geoNaturalEarth1()", value: d3.geoNaturalEarth1()},
    {index: 15, name: "d3.geoConicEquidistant()", value: d3.geoConicEquidistant()}];

  constructor() { }

  ngOnInit() {
    this.htmlElement = this.chartContainer.nativeElement;
    var width = window.innerWidth,
    height = window.innerHeight;

    this.projection = d3.geoEquirectangular();    
    var projection = this.projection;

        
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

  
  private changeProjection(index:any){
    this.htmlElement = this.chartContainer.nativeElement;
    var width = window.innerWidth,
    height = window.innerHeight;
    d3.select(this.htmlElement).select("svg").remove();
    
    this.projection = this.projections[index-1].value;    
    var projection = this.projection;

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
  

}


