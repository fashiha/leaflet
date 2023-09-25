import { Component } from '@angular/core';
import * as L from 'leaflet';
// import MapView from '@arcgis/core/views/MapView';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;
  // marker: L.Marker |any
  //basemap
  selectedBasemap!: string;

  constructor() { }
  // ngOnInit() {


  // }

  ionViewDidEnter() {
    this.map = L.map('mapId').setView([-7.11770870365617, 110.89319125540625], 7)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    const markerIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      iconSize: [25, 40], //ukuran icon
      iconAnchor: [12, 40], // titik petunjuk icon
    })

    const marker = L.marker([-7.11770870365617, 110.89319125540625], { icon: markerIcon }).addTo(this.map);
    marker.bindPopup('Halo').openPopup();
    this.map.addLayer(marker);

    // menambah layer peta osm
    var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
    }).addTo(this.map);

    var openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)'
    }).addTo(this.map);

    var baseMaps = {
      "OpenStreetMap": osmLayer,
      "OpenStreetMap.HOT": osmHOT,
      "OpenTopoMap": openTopoMap
    };

    L.control.layers(baseMaps).addTo(this.map);
  }




  //   // Basemap
  //   async changeBasemap() {
  //     this.mapView.map.basemap = this.selectedBasemap;
  // }
}
