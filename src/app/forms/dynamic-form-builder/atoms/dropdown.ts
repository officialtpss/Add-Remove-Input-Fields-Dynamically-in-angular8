import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'dropdown',
    template: `
      <div [formGroup]="form">
        <select class="form-control" [id]="field.name" [name]="field.name">
          <option selected="selected">Select {{field.label}}</option>
          <option *ngFor="let opt of field.options" [value]="opt.key">{{opt.label}}</option>
        </select>
      </div>
    `
})
export class DropDownComponent {
    @Input() field: any = {};
    @Input() form: FormGroup;

    constructor() {

    }
}
