import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { PersonFormData } from '../../models';

@Component({
  selector: 'app-people-form',
  standalone: true,
  imports: [
    CommonModule,
    MatNativeDateModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
  ],
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.scss'],
})
export class PeopleFormComponent {
  private readonly fb = inject(FormBuilder).nonNullable;
  protected readonly formGroup = this.fb.group({
    names: [
      '',
      {
        updateOn: 'blur',
      },
    ],
    emailAddresses: [
      '',
      {
        updateOn: 'blur',
      },
    ],
    phoneNumbers: [
      '',
      {
        updateOn: 'blur',
      },
    ],
  });

  @Output() readonly dataChange = new EventEmitter<PersonFormData>();

  protected doSubmit(): void {
    if (this.formGroup.invalid) {
      return;
    }

    const formData = this.formGroup.getRawValue();

    this.dataChange.emit({
      names: [{ givenName: formData.names }],
      emailAddresses: [{ value: formData.emailAddresses }],
      phoneNumbers: [{ value: formData.phoneNumbers }],
    });
  }
  protected back(): void {
    history.back();
  }
}
