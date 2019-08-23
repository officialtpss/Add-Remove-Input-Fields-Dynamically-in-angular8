import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'radio',
    template: `
      <div [formGroup]="form">
        <div class="form-check-inline p-2"  *ngFor="let opt of field.options">
          <input class="form-check-input"  name="field.name" type="radio" [value]="opt.key" >
          <label class="form-check-label">
            {{opt.label}}
          </label>
        </div>
      </div>
    `
})
export class RadioComponent {
    @Input() field: any = {};
    @Input() form: FormGroup;
}
