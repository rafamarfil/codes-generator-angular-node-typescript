import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedRootInterceptorsHeaders } from './shared-root-interceptors-headers';
import { SharedRootInterceptorsErrors } from './shared-root-interceptors-errors';

@NgModule({
  imports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SharedRootInterceptorsHeaders,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SharedRootInterceptorsErrors,
      multi: true,
    },
  ],
})
export class SharedRootInterceptorsModule {}
