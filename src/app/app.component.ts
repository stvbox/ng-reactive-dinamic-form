import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'form-builder-stud';

  formShema = [
    { name: 'field1', type: 'string', value: 'Строка' },
    { name: 'field2', type: 'number', value: 'Номер', items: [
      { name: 'field21', type: 'number', value: 'Номер21' },
      { name: 'field22', type: 'number', value: 'Номер22' }
    ]},
    { name: 'field3', type: 'other', value: 'Прочее' },
  ];

  formGroup: FormGroup = new FormGroup({});

  _createControl(field) {
    const control = new FormControl(field.value);
    this.formGroup.registerControl(field.name, new FormControl(field.value));
    return control;
  }

  createControl( field ) {
    return this.formGroup.get(field.name) || this._createControl(field);
  }

  fieldsTrackByFn(index, item) {
    console.log(index);
    console.log(item);
    return index;
  }

}
