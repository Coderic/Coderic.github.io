import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrowdfundingRoutingModule } from './crowdfunding-routing.module';
import { CrowdfundingComponent } from './crowdfunding.component';


@NgModule({
  declarations: [
    CrowdfundingComponent
  ],
  imports: [
    CommonModule,
    CrowdfundingRoutingModule
  ]
})
export class CrowdfundingModule { }