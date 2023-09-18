import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from 'src/app/star-war/people/people-list/people-list.component';
import { PeopleService } from 'src/app/star-war/services/people.service';
import { SearchData } from 'src/app/star-war/models';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-people-list-page',
  standalone: true,
  imports: [CommonModule, PeopleListComponent],
  templateUrl: './people-list-page.component.html',
  styleUrls: ['./people-list-page.component.scss'],
})
export class PeopleListPageComponent {
  private readonly peopleService = inject(PeopleService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  protected readonly data$ = this.route.queryParams.pipe(
    switchMap((params) =>
      this.peopleService.getAll(params).pipe(
        map((data) => ({
          params,
          data,
        })),
      ),
    ),
  );

  protected doSearchDataChange(searchData: SearchData): void {
    this.router.navigate([], {
      replaceUrl: true,
      queryParams: searchData,
    });
  }
}
