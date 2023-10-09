import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { EventFormData } from '../../models';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-events-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
  ],
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.scss'],
})
export class EventsFormComponent {
  private readonly fb = inject(FormBuilder).nonNullable;
  protected readonly formGroup = this.fb.group({
    summary: [
      '',
      {
        updateOn: 'blur',
      },
    ],
    start: [
      new Date(),
      {
        updateOn: 'blur',
      },
    ],
    end: [
      new Date(),
      {
        updateOn: 'blur',
      },
    ],
  });

  @Output() readonly dataChange = new EventEmitter<EventFormData>();

  protected doSubmit(): void {
    if (this.formGroup.invalid) {
      return;
    }

    const formData = this.formGroup.getRawValue();
    const [startDate] = formData.start.toISOString().split('T');
    const [endDate] = formData.end.toISOString().split('T');

    this.dataChange.emit({
      summary: formData.summary,
      start: {
        date: startDate,
      },
      end: {
        date: endDate,
      },
    });
  }
}
