import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './community.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  {
    path: '', component: ContainerComponent,
    children: [
      {
        path: '', component: CommunityComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }