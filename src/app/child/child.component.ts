import { Component, OnInit, AfterContentInit, AfterContentChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, AfterContentInit, AfterContentChecked , OnDestroy{
  ngOnDestroy(): void {
    console.log("child组件被销毁");
  }

  ngAfterContentChecked(): void {
    console.log("子组件投影内容变更检测完毕")
  }

  ngAfterContentInit(): void {
    console.log("子组件投影内容初始化完毕")
  }

  constructor() { }

  ngOnInit() {
  }

}
