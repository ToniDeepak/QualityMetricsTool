import { Injectable } from '@angular/core';
import { QualityMetricsDetail } from './quality-metrics-details.model';

@Injectable({
  providedIn: 'root'
})
export class QualityMetricsDetailsService {

  constructor() { }

  formData: QualityMetricsDetail = new QualityMetricsDetail(); 
}
