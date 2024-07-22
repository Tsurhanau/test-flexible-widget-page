import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SibeBar2Component } from './sibe-bar-2.component';

describe('SibeBar2Component', () => {
  let component: SibeBar2Component;
  let fixture: ComponentFixture<SibeBar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SibeBar2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SibeBar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
