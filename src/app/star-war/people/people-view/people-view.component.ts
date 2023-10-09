import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../../models';

@Component({
  selector: 'app-people-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people-view.component.html',
  styleUrls: ['./people-view.component.scss'],
})
export class PeopleViewComponent {

}
