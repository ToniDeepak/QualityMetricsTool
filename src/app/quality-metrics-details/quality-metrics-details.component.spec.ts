import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityMetricsDetailsComponent } from './quality-metrics-details.component';

describe('QualityMetricsDetailsComponent', () => {
  let component: QualityMetricsDetailsComponent;
  let fixture: ComponentFixture<QualityMetricsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityMetricsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityMetricsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
