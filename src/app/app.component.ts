import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-content';

  // 这个divContent 就是一个html,通过输定绑定绑到模板的div上，这个html展示在父组件上
  divContent = "<div>慕课网</div>";s
}
