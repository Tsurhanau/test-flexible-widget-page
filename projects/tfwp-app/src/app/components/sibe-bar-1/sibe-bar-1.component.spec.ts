import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SibeBar1Component } from './sibe-bar-1.component';

describe('SibeBar1Component', () => {
  let component: SibeBar1Component;
  let fixture: ComponentFixture<SibeBar1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SibeBar1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SibeBar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
