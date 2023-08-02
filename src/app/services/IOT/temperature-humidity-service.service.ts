import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class TemperatureHumidityService {

  constructor(public socket: Socket) { }

  connectToWebSocket() {
    this.socket.ioSocket.opts = {
    };
    this.socket.connect();
  }

  disconnectFromWebSocket() {
    this.socket.disconnect();
  }
}