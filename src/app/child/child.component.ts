import { Component, OnInit, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, AfterContentInit, AfterContentChecked {

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
