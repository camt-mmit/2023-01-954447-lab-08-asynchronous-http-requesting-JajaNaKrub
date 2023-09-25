import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-require-token-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './require-token-page.component.html',
  styleUrls: ['./require-token-page.component.scss'],
})
export class RequireTokenPageComponent {
  private readonly tokenService = inject(TokenService);

  protected readonly authUrl$ = this.tokenService.getAuthorizationURL();
}
