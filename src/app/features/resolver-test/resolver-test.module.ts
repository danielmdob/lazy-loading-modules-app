import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResolverTestComponent } from './resolver-test.component';
import { ResolverTestRoutingModule } from './resolver-test-routing.module';
import { TestResolverService } from './test-resolver.service';

@NgModule({
  declarations: [ResolverTestComponent],
  imports: [
    CommonModule,
    ResolverTestRoutingModule
  ],
  providers: [TestResolverService]
})
export class ResolverTestModule { }
