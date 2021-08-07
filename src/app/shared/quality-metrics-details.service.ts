import { Injectable } from '@angular/core';
import { QualityMetricsDetailModel } from './quality-metrics-details.model';

@Injectable({
  providedIn: 'root'
})
export class QualityMetricsDetailsService {

  constructor() { }

  formData: QualityMetricsDetailModel = new QualityMetricsDetailModel(); 
}
