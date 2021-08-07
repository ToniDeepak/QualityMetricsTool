import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QualityMetricsDetailsComponent } from './quality-metrics-details/quality-metrics-details.component';
import { QualityMetricsDetailsFormComponent } from './quality-metrics-details/quality-metrics-details-form/quality-metrics-details-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QualityMetricsDetailsComponent,
    QualityMetricsDetailsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
