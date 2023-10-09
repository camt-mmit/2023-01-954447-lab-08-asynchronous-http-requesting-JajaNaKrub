import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsService } from 'src/app/google/services/events.service';
import { EventsListComponent } from 'src/app/google/events/events-list/events-list.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-events-list-page',
  standalone: true,
  imports: [
    CommonModule,
    EventsListComponent,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './events-list-page.component.html',
  styleUrls: ['./events-list-page.component.scss'],
})
export class EventsListPageComponent {
  private readonly eventsService = inject(EventsService);

  protected readonly data$ = this.eventsService.getAll({
    singleEvents: true,
    orderBy: 'startTime',
    timeMin: new Date(Date.now() - 30 * 24 * 60 * 60 * 1_000).toISOString(),
  });
}
