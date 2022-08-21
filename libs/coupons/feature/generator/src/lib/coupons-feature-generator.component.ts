import { Component, OnInit } from '@angular/core';

import {
  CouponsDataAccessService,
  ConfigData,
} from '@rvantravel/coupons/data-access';

import configRandomData from './config/coupon-config-random.json';
import configEvenData from './config/coupon-config-even.json';

interface CouponsConfig {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'rvantravel-generator',
  templateUrl: './coupons-feature-generator.component.html',
  styleUrls: ['./coupons-feature-generator.component.scss'],
})
export class CouponsFeatureGeneratorComponent implements OnInit {
  public couponsConfig: CouponsConfig[] = [
    { value: 'random', viewValue: 'Random coupons' },
    { value: 'even', viewValue: 'Even secuential coupons' },
  ];
  public selectedCouponsConfig = this.couponsConfig[0].value;
  public coupons?: number[];

  // Choose the type of configuration data between Random or Even coupons
  public configData!: ConfigData;

  constructor(private couponsDataAccessService: CouponsDataAccessService) {}

  ngOnInit() {
    this.selectCouponConfiguration();
  }

  selectCouponConfiguration() {
    switch (this.selectedCouponsConfig) {
      case 'random':
        this.configData = configRandomData;
        break;
      case 'even':
        this.configData = configEvenData;
        break;
      default:
        break;
    }

    this.couponsDataAccessService
      .getCoupons(this.configData)
      .subscribe((arg: number[]) => {
        if (arg) {
          this.coupons = arg;
        }
      });
  }
}
