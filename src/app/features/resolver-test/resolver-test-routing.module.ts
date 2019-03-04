import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResolverTestComponent } from './resolver-test.component';
import { TestResolverService } from './test-resolver.service';

const routes: Routes = [
  {
    path: 'resolver',
    component: ResolverTestComponent,
    resolve: { infoString: TestResolverService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResolverTestRoutingModule { }
