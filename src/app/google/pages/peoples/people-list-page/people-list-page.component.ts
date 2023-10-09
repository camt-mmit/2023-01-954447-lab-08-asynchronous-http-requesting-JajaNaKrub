import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PeoplesService } from 'src/app/google/services/peoples.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PeopleListComponent } from 'src/app/google/peoples/people-list/people-list.component';

@Component({
  selector: 'app-people-list-page',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
    PeopleListComponent,
  ],
  templateUrl: './people-list-page.component.html',
  styleUrls: ['./people-list-page.component.scss'],
})
export class PeopleListPageComponent {
  private readonly peoplesService = inject(PeoplesService);

  protected readonly data$ = this.peoplesService.getAll({
    personFields: 'names,photos,emailAddresses,phoneNumbers',
    sortOrder: 'FIRST_NAME_ASCENDING',
  });
}
