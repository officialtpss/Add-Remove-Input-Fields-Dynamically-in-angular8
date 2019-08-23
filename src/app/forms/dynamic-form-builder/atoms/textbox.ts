import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

// text,email,tel,textarea,password,
@Component({
    // tslint:disable-next-line: component-selector
    selector: 'textbox',
    template: `
    <div [formGroup]="form" class="customForm1">
    <input *ngIf="field.type==='text'" [attr.type]="field.type"   [placeholder]="field.placeholder"
    class="form-control"  [name]="field.name" >
    <input *ngIf="field.type==='email'" [attr.type]="field.type"
     class="form-control" [id]="field.name" [name]="field.name"   [placeholder]="field.placeholder"
      >
    <input *ngIf="field.type==='password'" [attr.type]="field.type"
     class="form-control" [id]="field.name" [name]="field.name"   [placeholder]="field.placeholder"
     >
     <input *ngIf="field.type==='tel'" [attr.type]="field.type"   [placeholder]="field.placeholder"
     class="form-control" [id]="field.name" [name]="field.name"
     >
    <textarea *ngIf="field.type==='textarea'"
    rows="9" class="form-control"
    [placeholder]="field.placeholder"></textarea>
    </div>
    `
})
export class TextBoxComponent {
    @Input() field: any = {};
    @Input() form: FormGroup;
    get isValid() { return this.form.controls[this.field.name].valid; }
    get isDirty() { return this.form.controls[this.field.name].dirty; }

    constructor() {

    }
}
