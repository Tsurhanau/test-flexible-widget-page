import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetsWidgetComponent } from './bets-widget.component';

describe('BetsWidgetComponent', () => {
  let component: BetsWidgetComponent;
  let fixture: ComponentFixture<BetsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BetsWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
