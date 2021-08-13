import { Component, OnInit } from '@angular/core';
import { QualityMetricsDetailsService } from '../shared/quality-metrics-details.service';

@Component({
  selector: 'app-quality-metrics-details',
  templateUrl: './quality-metrics-details.component.html',
  styleUrls: ['./quality-metrics-details.component.css']
})
export class QualityMetricsDetailsComponent implements OnInit {

  constructor(public service: QualityMetricsDetailsService) { }

  ngOnInit(): void {
  }

}
