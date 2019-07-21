# AngularContent

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## 投影
<!-- 
在运行时动态改变模板的内容，需要用到投影 @View

ngAfterViewInit, ngAfterViewChecked 是在模板视图组装完成之后调用的
ngAfterContentInit, ngAfterContentChecked 是在被投影ng-content进来的代码组装完成之后调用的，
 -->
## 所有钩子函数总结
<!-- 
constructor: 是实例化对象
ngOnChanges：初始化输入属性
ngOnInit：初始化除了输入属性的其他所有属性
ngDoCheck：被初始化的属性做一次变更检查
上面四个是属性初始化化调用的钩子，整个组件被赋予的需要被赋予的值，从下面钩子开始，组件开始渲染视图

ngAfterContentInit
ngAfterContentChecked
首先渲染投影进来的视图，投影进来的视图渲染完毕之后会调用上面的两个方法，如果组件有子组件，会在这两个方法调用完毕之后调用子组件创建的过程，执行上面一套方法，一直到子组件投影内容渲染完毕之后，会调用当前组件的下面两个方法，这样组件的初始化过程就算完毕了，用户可以进行一些交互，比如说点击事件，输入，任何一些交互都会触发angular的变更检测机制，而一旦检测到了发生了变更，那么在当前组件树上所有活动组件上被实现的，带有checked关键字的这些方法都会被调用，用来检查当前组件的一些变化，如果这些变化导致了某个输入属性的变化，那么这个组件的 ngOnChanges 也会被调用，这是组件周期钩子的总结



ngAfterViewInit
ngAfterViewChecked

变化检测：
ngOnChanges
ngDoCheck
ngAfterConyentChecked
ngAfterViewChecked

ngOnDestory: 组件销毁
最后：当组件被销毁的时候，会调用 ngOnDestory() ,这个方法什么时候会被调用，什么时候会被销毁？
是在路由的时候，当从一个路由地址调往另一个路由地址，这个时候前一个路由地址对应的那个组件会被销毁，后一个路由地址的组件会被创建，

 -->
