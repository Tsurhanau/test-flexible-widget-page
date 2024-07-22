import { TestBed } from '@angular/core/testing';

import { BetsWidgetService } from './bets-widget.service';

describe('BetsWidgetService', () => {
  let service: BetsWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BetsWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
