import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { Routes, RouterModule } from '@angular/router';
/*
1：配置路由
2: 在 imports 属性中声明 RouterModule.forRoot() 把 routeConfig 导入模块，
3：在app.component修改内容

*/
var routeConfig: Routes = [
  {path: '', component: ChildComponent},
  {path: 'child2', component: Child2Component},
]


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
