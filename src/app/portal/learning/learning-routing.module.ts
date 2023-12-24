import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearningComponent } from './learning.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  {
    path: '', component: ContainerComponent,
    children: [
      {
        path: '', component: LearningComponent,
      },
      {
        path: 'courses',
        loadChildren: () =>
          import('./courses/courses.module').then(
            (m) => m.CoursesModule
          ),
      },
      {
        path: 'video-tutorials',
        loadChildren: () =>
          import('./video-tutorials/video-tutorials.module').then(
            (m) => m.VideoTutorialsModule
          ),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningRoutingModule { }
