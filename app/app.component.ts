import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'my-app',
  template: `
    <h3>@ngx-formly/bootstrap</h3>
    <form [formGroup]="form" (ngSubmit)="submit(model)">
      <formly-form [model]="model" [fields]="fields">
        <button type="submit" class="btn btn-default">Submit</button>
      </formly-form>
    </form>
  `,
})
export class AppComponent {
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    }, {
      key: 'gender',
      type: 'radio',
      templateOptions: {
        type: 'radio',
        label: 'Gender',
        required: true,
        name: 'gender',
        options: [{ value: 'Male', key: 'M' }, { value: 'Female', key: 'F' }]
      }
    }
  ];

  submit(user) {
    console.log(user);
  }
}