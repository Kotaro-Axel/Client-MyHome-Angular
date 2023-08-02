import { Component, OnInit, OnDestroy } from '@angular/core';
import { TemperatureHumidityService } from 'src/app/services/IOT/temperature-humidity-service.service';

@Component({
  selector: 'app-list-habitat',
  templateUrl: './list-habitat.component.html',
  styleUrls: ['./list-habitat.component.css']
})
export class ListHabitatComponent  implements OnInit, OnDestroy {
  mqttData: any; // Variable para almacenar los datos recibidos en tiempo real

  constructor(private mqttDataService: TemperatureHumidityService) { }

  ngOnInit() {
    this.mqttDataService.connectToWebSocket();

    this.mqttDataService.socket.on('mqtt-data', (data: any) => {
      this.mqttData = data;
    });
  }

  ngOnDestroy() {
    this.mqttDataService.disconnectFromWebSocket();
  }
}