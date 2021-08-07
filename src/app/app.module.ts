import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QualityMetricsDetailsComponent } from './quality-metrics-details/quality-metrics-details.component';
import { QualityMetricsDetailsFormComponent } from './quality-metrics-details/quality-metrics-details-form/quality-metrics-details-form.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    QualityMetricsDetailsComponent,
    QualityMetricsDetailsFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
