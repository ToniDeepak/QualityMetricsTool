import { Component, OnInit } from '@angular/core';
import { QualityMetricsDetailsService } from 'src/app/shared/quality-metrics-details.service';

@Component({
  selector: 'app-quality-metrics-details-form',
  templateUrl: './quality-metrics-details-form.component.html',
  styleUrls: ['./quality-metrics-details-form.component.css']
})
export class QualityMetricsDetailsFormComponent implements OnInit {

  constructor(public service:QualityMetricsDetailsService) { }

  ngOnInit(): void {
  }

}
