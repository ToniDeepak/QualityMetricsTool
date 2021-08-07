import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityMetricsDetailsFormComponent } from './quality-metrics-details-form.component';

describe('QualityMetricsDetailsFormComponent', () => {
  let component: QualityMetricsDetailsFormComponent;
  let fixture: ComponentFixture<QualityMetricsDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityMetricsDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityMetricsDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
