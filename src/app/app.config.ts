import {
  ApplicationConfig,
  ENVIRONMENT_INITIALIZER,
  inject,
} from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { routes } from './app.routes';
import { ConfigurationToken as GoogleConfigurationToken } from './google/models';
import { configuration as googleConfiguration } from './configs/google';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: GoogleConfigurationToken, useValue: googleConfiguration },
    provideRouter(routes),
    provideHttpClient(),
    {
        provide: ENVIRONMENT_INITIALIZER,
        multi: true,
        useValue: () => {
            const iconRegistry = inject(MatIconRegistry);
            const outlinedFontSetClasses = iconRegistry
                .getDefaultFontSetClass()
                .filter((fontSetClass) => fontSetClass !== 'material-icons')
                .concat(['material-symbols-outlined']);
            iconRegistry.setDefaultFontSetClass(...outlinedFontSetClasses);
        },
    },
    provideAnimations()
],
};
