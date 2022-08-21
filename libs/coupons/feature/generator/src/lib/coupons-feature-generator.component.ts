import { Component, OnInit } from '@angular/core';

import { CouponsDataAccessService } from '@rvantravel/coupons/data-access';

import configRandomData from './config/coupon-config-random.json';
import configOddData from './config/coupon-config-odd.json';

@Component({
  selector: 'rvantravel-generator',
  templateUrl: './coupons-feature-generator.component.html',
  styleUrls: ['./coupons-feature-generator.component.scss'],
})
export class CouponsFeatureGeneratorComponent implements OnInit {
  public coupons?: string[];

  // Choose the type of configuration data between Random or Odd coupons
  private configData = configRandomData;

  constructor(private couponsDataAccessService: CouponsDataAccessService) {}

  ngOnInit() {
    this.couponsDataAccessService
      .getCoupons(this.configData)
      .subscribe((arg: any) => {
        if (arg) {
          this.coupons = arg;
        }
      });
  }
}
