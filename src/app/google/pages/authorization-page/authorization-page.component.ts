import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenService } from '../../services/token.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-authorization-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.scss'],
})
export class AuthorizationPageComponent {
  private readonly tokenService = inject(TokenService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  protected errorMassage: string | null = null;
  constructor() {
    const params = this.route.snapshot.queryParams;
    const error = params['error'];

    const error_description = params['error_description'];
    const code = params['code'];
    const securityToken = params['state'];

    if (typeof error !== 'undefined') {
      this.errorMassage = `${error}: ${error_description}`;
    } else if (
      typeof code === 'undefined' ||
      typeof securityToken === 'undefined'
    ) {
      this.errorMassage = 'Bad Request';
    } else {
      this.tokenService
        .exchangeCodeForToken(code, securityToken)
        .pipe(takeUntilDestroyed())
        .subscribe({
          next: (stateData) => {
            this.router.navigateByUrl(stateData.redirectUrl);
          },
          error: (err) => {
            this.errorMassage = `${err}`;
          },
        });
    }
  }
}
