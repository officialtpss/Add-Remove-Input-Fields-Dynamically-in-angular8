import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import { FormsRoutingModule } from './forms-routing.module';
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicFormBuilderModule } from './dynamic-form-builder/dynamic-form-builder.module';
@NgModule({
  declarations: [FormsComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    NgbModule,
    NgbAlertModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    DynamicFormBuilderModule
  ]
})
export class FormsDynamicModule { }
