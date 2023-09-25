import { Configuration } from '../google/models';

export const configuration: Configuration = {
  client_id:
    '209689905225-dj1bo29m0c7or5926cv4bb1nu5aru0cv.apps.googleusercontent.com',
  client_secret: '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',
  scopes: ['https://www.googleapis.com/auth/calendar'],
  redirect_uri: 'http://localhost:4200/google/authorization',
};
