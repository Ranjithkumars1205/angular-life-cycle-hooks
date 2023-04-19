import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { Route, RouterModule } from '@angular/router';
import { NestedChildComponent } from './nested-child/nested-child.component';

const route: Route[] = [{ path: 'parent', component: ParentComponent},
{ path: '', redirectTo: 'parent', pathMatch: 'full'}]
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    NestedChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
