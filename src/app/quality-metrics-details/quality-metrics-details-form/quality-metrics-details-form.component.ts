import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QualityMetricsDetailModel } from 'src/app/shared/quality-metrics-details.model';
import { QualityMetricsDetailsService } from 'src/app/shared/quality-metrics-details.service';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-quality-metrics-details-form',
  templateUrl: './quality-metrics-details-form.component.html',
  styleUrls: ['./quality-metrics-details-form.component.css']
})
export class QualityMetricsDetailsFormComponent implements OnInit {
datePickerConfig: Partial<BsDatepickerConfig>;
  constructor(public service:QualityMetricsDetailsService,public toastr: ToastrService ) { 
    this.datePickerConfig = Object.assign ({}, {containerClass: 'theme-dark-blue', showWeekNumbers: false});
  }

  ngOnInit(): void {
  }

  isSpinnerLoading = false;

  spinnerLoading(){
    this.isSpinnerLoading=true;
  }
 
  onSubmit(form:NgForm){
     this.service.postQualityMetricsDetails().subscribe(
       respose=>{
         this.isSpinnerLoading = false;
         this.toastr.success('Quality Metrics generated successfully', 'Quality Metrics Tool');
       },
       err=>{
         console.log(err);
         this.isSpinnerLoading = false;
       }); 
  }

  resetForm(form:NgForm){
    form.form.reset(form);
    this.service.formData = new QualityMetricsDetailModel();
  }
}
