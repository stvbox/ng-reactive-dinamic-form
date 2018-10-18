import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-builder-stud';

  formShema = [
    { name: 'field1', type: 'string', value: 'Строка' },
    { name: 'field2', type: 'number', value: 'Номер' },
    { name: 'field3', type: 'other', value: 'Прочее' },
  ];

  formGroup: FormGroup = new FormGroup({});

  createControl( ctl ) {
    this.formGroup.registerControl(ctl.name, new FormControl(ctl.value));
    return ctl.name;
  }

}
