import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  public form: FormGroup;
  inputType: string;
  labelName = '';
  isRequired = false;
  controlName = '';
  placeholderName = '';
  modalReference: NgbModalRef;
  types: any[] = [
    {
      name: 'Text',
      value: 'text'
    },
    {
      name: 'Password',
      value: 'password'
    },
    {
      name: 'Email',
      value: 'email'
    },
    {
      name: 'Telephone',
      value: 'tel'
    },
    {
      name: 'Textarea',
      value: 'textarea'
    },
    {
      name: 'Checkbox',
      value: 'checkbox'
    },
    {
      name: 'Radio',
      value: 'radio'
    },
    {
      name: 'Select List',
      value: 'dropdown'
    }
  ];
  options: any[];
  public fields: any[] = [
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      placeholder: 'First name',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'Last Name',
      placeholder: 'Last name',
      value: '',
      required: true,
      isRemove: false,
    },
    {
      type: 'text',
      name: 'email',
      label: 'Email',
      placeholder: 'Enter the email',
      value: '',
      required: true,
      isRemove: false,
    },
    {
      type: 'text',
      name: 'phone',
      label: 'Phone',
      placeholder: 'Phone',
      value: '',
      required: true,
      isRemove: false,
    }
  ];
  unsubcribe: any;
  constructor(
    private titleService: Title,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(`Generate Dynamic Form Fields`);
    this.initialForm();
  }

  resetFields() {
    this.inputType = 'text';
    this.labelName = '';
    this.isRequired = false;
    this.controlName = '';
    this.placeholderName = '';
    this.options = [
      {
        key: 'option1',
        label: 'Option 1'
      },
      {
        key: 'option2',
        label: 'Option 2'
      }
    ];
  }

  initialForm() {
    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.fields))
    });
    this.unsubcribe = this.form.valueChanges.subscribe((update) => {
      this.fields = JSON.parse(update.fields);
    });
  }

  getFields() {
    return this.fields;
  }
  open(content) {
    this.resetFields();
    this.modalReference = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  onKeyEnter(event: any, index) {
    this.options[index].key = event.target.value;
  }

  onKeyLabel(event: any, index) {
    this.options[index].label = event.target.value;
  }

  removeOption(index) {
    this.options.splice(index, 1);
  }

  addOption() {
    this.options.push({ key: '', label: '' });
  }

  titleCaseWord(word) {
    return word.toLowerCase().replace(/\b./g, (a) => a.toUpperCase());
  }

  stringCaptilized(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  addCustomField() {
    this.options = this.options.filter(v => (v.key !== '' && v.label !== ''));
    if (this.inputType.trim().length === 0) {
      this.toastr.warning('Input type is required');
      return false;
    } else if (this.labelName.trim().length === 0) {
      this.toastr.warning('Field label is required');
      return false;
    } else if (this.controlName.trim().length === 0) {
      this.toastr.warning('Field control name is required');
      return false;
    } else if (this.placeholderName.trim().length === 0) {
      this.toastr.warning('Field placeholder is required');
      return false;
    } else if ((this.inputType === 'checkbox' ||
      this.inputType === 'radio' ||
      this.inputType === 'dropdown')
      && this.options.length === 0) {
      this.toastr.warning('Option must be greater than one');
      return false;
    } else {
      this.placeholderName = this.stringCaptilized(this.placeholderName);
      this.labelName = this.titleCaseWord(this.labelName);
      this.controlName = this.controlName.replace(/\s/g, '').toLowerCase();
      this.fields.push(
        {
          type: this.inputType,
          name: this.controlName,
          label: this.labelName,
          placeholder: this.placeholderName,
          value: '',
          isRemove: true,
          required: this.isRequired,
          options: (this.inputType === 'checkbox' || this.inputType === 'radio' || this.inputType === 'dropdown')
            ? this.options : []
        }
      );
      this.initialForm();
      this.modalReference.close();
    }
  }
}
