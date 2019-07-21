import { Component, OnInit, AfterViewInit, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentInit, AfterContentChecked {
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    console.log("父组件视图内容初始化完毕");
  }

  message = "hello";
  ngAfterContentInit(): void {
    this.message = "hello world";
    console.log("父组件投影内容初始化完毕");
  }
  ngAfterContentChecked(): void {
    console.log("父组件投影内容变更检测完毕");
  }
  /*
    app.component.ts:父组件投影内容初始化完毕
    app.component.ts:19 父组件投影内容变更检测完毕
    child.component.ts:15 子组件投影内容初始化完毕
    child.component.ts:11 子组件投影内容变更检测完毕
    app.component.ts:13 父组件视图内容初始化完毕
    core.js:33452 Angular is running in the development mode. Call enableProdMode() to enable the production mode.
    app.component.ts:19 父组件投影内容变更检测完毕
    child.component.ts:11 子组件投影内容变更检测完毕
    client:52 [WDS] Live Reloading enabled.

    这说明，组件钩子之间的调用顺序

    这里需要注意的是：ngAfterContentInit()和 ngAfterViewInit() 不同，ngAfterViewInit()在整个模板组装完成之后，是不能够再改里面的内容，引起模板变化的，
    但是在ngAfterContentInit() 是可以改变他的内容的，是因为 ngAfterContentInit() 在被调用的时候，整个视图还没有组装完毕，只是投影进来的内容被组装完毕了
    所以在这里改变他的内容是不会报错的，



  */

  title = 'angular-content';

  // 这个divContent 就是一个html,通过输定绑定绑到模板的div上，这个html展示在父组件上
  divContent = "<div>慕课网</div>";s
}
