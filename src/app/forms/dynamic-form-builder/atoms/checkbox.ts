import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'checkbox',
    template: `
      <div [formGroup]="form">
        <div name="field.name">
          <div *ngFor="let opt of field.options" class="form-check-inline p-2">
          <label class="form-check-label">
             <input  name="opt.key"  class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
             {{opt.label}}</label>
          </div>
        </div>
      </div>
    `
})
export class CheckBoxComponent {
    @Input() field: any = {};
    @Input() form: FormGroup;
    get isValid() { return this.form.controls[this.field.name].valid; }
    get isDirty() { return this.form.controls[this.field.name].dirty; }
}
