import { TestBed } from '@angular/core/testing';

import { TemperatureHumidityServiceService } from './temperature-humidity-service.service';

describe('TemperatureHumidityServiceService', () => {
  let service: TemperatureHumidityServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemperatureHumidityServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
