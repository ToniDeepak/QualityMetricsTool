import { Injectable } from '@angular/core';
import { QualityMetricsDetailModel } from './quality-metrics-details.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QualityMetricsDetailsService {

  constructor(private http:HttpClient) { }

  formData: QualityMetricsDetailModel = new QualityMetricsDetailModel(); 
  readonly baseURl = ''

  postQualityMetricsDetails(){
   return this.http.post(this.baseURl,this.formData);
  }
}
