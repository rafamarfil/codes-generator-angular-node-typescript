import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { URI_LOCALHOST, COUPONS } from './http-consts';
import { ConfigData } from '../models/config-data';

@Injectable({ providedIn: 'root' })
export class CouponsDataAccessService {
  constructor(private http: HttpClient) {}

  public getCoupons(configData: ConfigData): Observable<any> {
    const URL = URI_LOCALHOST + COUPONS;

    return this.http.post(URL, JSON.stringify(configData)).pipe(
      map((resp) => {
        return resp;
      })
    );
  }
}
