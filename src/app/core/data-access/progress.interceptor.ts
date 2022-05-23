import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedService } from './services/shared.service';

@Injectable()
export class ProgressInterceptor implements HttpInterceptor {
  constructor(private sharedService: SharedService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.sharedService.executingLoader$.next(true);

    console.log(this.sharedService.executingLoader$.value);
    return next.handle(request);
  }
}
