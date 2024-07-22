import { TestBed } from '@angular/core/testing';

import { SportWidgetService } from './sport-widget.service';

describe('SportWidgetService', () => {
  let service: SportWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
