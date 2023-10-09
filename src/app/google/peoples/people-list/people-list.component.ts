import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ConnectionsList,
  displayEventTimeRange,
  urlPhotos,
  displayName,
  displayPhoneNumber,
  displayEmailAddress,
} from '../../models';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
})
export class PeopleListComponent {
  @Input({ required: true }) data!: ConnectionsList;

  protected urlPhotos = urlPhotos;
  protected displayName = displayName;
  protected displayPhoneNumber = displayPhoneNumber;
  protected displayEmailAddress = displayEmailAddress;

  protected readonly displayEventTimeRange = displayEventTimeRange;
}
