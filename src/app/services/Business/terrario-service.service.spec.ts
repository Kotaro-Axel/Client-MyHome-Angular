import { TestBed } from '@angular/core/testing';

import { TerrarioServiceService } from './terrario-service.service';

describe('TerrarioServiceService', () => {
  let service: TerrarioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerrarioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
