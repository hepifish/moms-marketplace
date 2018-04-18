import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketRoutingModule } from './market-routing.module';
import { MarketOverviewComponent } from './market-overview/market-overview.component';
import { MarketItemComponent } from './market-item/market-item.component';

@NgModule({
  imports: [
    CommonModule,
    MarketRoutingModule
  ],
  declarations: [MarketOverviewComponent, MarketItemComponent]
})
export class MarketModule { }
