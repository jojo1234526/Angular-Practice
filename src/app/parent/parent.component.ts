import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  employee = 'Parent Employee';
  parent = '';
  getChildevent(data: string) {
    console.log('Received in parent:', data);
    this.parent=data;

  }
  

}
