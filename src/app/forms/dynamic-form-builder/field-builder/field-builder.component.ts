import { Component, Input, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'field-builder',
  template: `

  <div class="form-group row" [formGroup]="form">

  <label class="col-md-3 form-control-label" [attr.for]="field.label">
  {{field.label}}
  <strong class="text-danger" *ngIf="field.required">*</strong>
  </label>
  <div class="col-md-9" [ngSwitch]="field.type">
  <textbox *ngSwitchCase="'text'" [field]="field" [form]="form"></textbox>
  <textbox *ngSwitchCase="'email'" [field]="field" [form]="form"></textbox>
  <textbox *ngSwitchCase="'password'" [field]="field" [form]="form"></textbox>
  <textbox *ngSwitchCase="'tel'" [field]="field" [form]="form"></textbox>
  <textbox *ngSwitchCase="'textarea'" [field]="field" [form]="form"></textbox>
  <dropdown *ngSwitchCase="'dropdown'" [field]="field" [form]="form"></dropdown>
  <checkbox *ngSwitchCase="'checkbox'" [field]="field" [form]="form"></checkbox>
  <radio *ngSwitchCase="'radio'" [field]="field" [form]="form"></radio>
  <file *ngSwitchCase="'file'" [field]="field" [form]="form"></file>
  </div>
  </div>
  `
})
export class FieldBuilderComponent implements OnInit {
  @Input() field: any;
  @Input() form: any;

  constructor() { }

  ngOnInit() {
  }

}
