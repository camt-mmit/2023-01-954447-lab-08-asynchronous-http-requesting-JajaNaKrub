import { Injectable, inject } from '@angular/core';
import { ConfigurationToken } from '../models';
import { arrayBufferToBase64, randomString, sha256 } from '../utils';

const authUrl = 'https://accounts.google.com/o/oauth2/v2/auth' as const;
const tokenUrl = 'https://oauth2.googleapis.com/token' as const;

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private readonly config = inject(ConfigurationToken);

  async getAuthorizationURL(): Promise<URL> {
    const code_verifier = randomString(54);
    const code_challenge = arrayBufferToBase64(
      await sha256(code_verifier),
      true,
    );
    const url = new URL(authUrl);
    url.searchParams.set('client_id', this.config.client_id);
    url.searchParams.set('redirect_uri', this.config.redirect_uri);
    url.searchParams.set('response_type', 'code');
    url.searchParams.set('scope', this.config.scopes.join(' '));
    url.searchParams.set('code_challenge', code_challenge);
    url.searchParams.set('code_challenge_method', 'S256');

    url.searchParams.set('prompt', 'consent');
    url.searchParams.set('access_type', 'offline');

    return url;
  }
}
