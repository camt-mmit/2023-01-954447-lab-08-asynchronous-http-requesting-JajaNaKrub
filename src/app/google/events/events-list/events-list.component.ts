import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsList, displayEventTimeRange } from '../../models';

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent {
  @Input({ required: true }) data!: EventsList;

  protected readonly displayEventTimeRange = displayEventTimeRange;
}
