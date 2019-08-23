import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dynamic-form-builder',
  template: `
    <form (ngSubmit)="onSubmit.emit(this.form.value)" [formGroup]="form" class="form-horizontal">
      <div *ngFor="let field of fields; let i = index">
          <div class="column-custom">
          <field-builder [field]="field" [form]="form"></field-builder>
          <div class="p-2" *ngIf="field.isRemove===true">
           <a href='javascript:void(0);'  class="text-dark" (click)='removeField(i)'>X</a></div>
          </div>
      </div>
      <div class="form-row"></div>
   </form>
  `,
})
export class DynamicFormBuilderComponent implements OnInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSubmit = new EventEmitter();
  @Input() fields: any[] = [];
  form: FormGroup;
  constructor() { }
  removeField(i) {
    this.fields.splice(i, 1);
    this.iniitalForm();
  }
  ngOnInit() {
    this.iniitalForm();
  }
  iniitalForm() {
    const fieldsCtrls = {};
    for (const f of this.fields) {
      // tslint:disable-next-line: triple-equals
      if (f.type != 'checkbox') {
        fieldsCtrls[f.name] = new FormControl(f.value || '', Validators.required);
      } else {
        const opts = {};
        for (const opt of f.options) {
          opts[opt.key] = new FormControl(opt.value);
        }
        fieldsCtrls[f.name] = new FormGroup(opts);
      }
    }
    this.form = new FormGroup(fieldsCtrls);
  }
}
