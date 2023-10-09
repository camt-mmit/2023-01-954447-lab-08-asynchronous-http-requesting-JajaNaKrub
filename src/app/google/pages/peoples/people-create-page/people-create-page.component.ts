import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleFormComponent } from 'src/app/google/peoples/people-form/people-form.component';
import { PeoplesService } from 'src/app/google/services/peoples.service';
import { take } from 'rxjs';
import { PersonFormData } from 'src/app/google/models';

@Component({
  selector: 'app-people-create-page',
  standalone: true,
  imports: [CommonModule, PeopleFormComponent],
  templateUrl: './people-create-page.component.html',
  styleUrls: ['./people-create-page.component.scss'],
})
export class PeopleCreatePageComponent {
  private readonly peoplesService = inject(PeoplesService);

  protected onDataChange(personFormData: PersonFormData): void {
    this.peoplesService
      .create(personFormData)
      .pipe(take(1))
      .subscribe(() => {
        history.back();
      });
  }
}
