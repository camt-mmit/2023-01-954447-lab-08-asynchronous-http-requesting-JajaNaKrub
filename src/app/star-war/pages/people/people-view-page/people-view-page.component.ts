import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleViewComponent } from 'src/app/star-war/people/people-view/people-view.component';
import { PeopleService } from 'src/app/star-war/services/people.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-people-view-page',
  standalone: true,
  imports: [CommonModule, PeopleViewComponent],
  templateUrl: './people-view-page.component.html',
  styleUrls: ['./people-view-page.component.scss'],
})
export class PeopleViewPageComponent {
  private readonly peopleService = inject(PeopleService);
  private readonly route = inject(ActivatedRoute);
  protected readonly data$ = this.route.params.pipe(
    switchMap((params) => this.peopleService.get(params['id'])),
  );
}
