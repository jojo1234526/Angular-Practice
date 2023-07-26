import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() myevent: EventEmitter<string> = new EventEmitter<string>();
  @Input()
  empdata!: string;
  ChildData : string = "I am child data";

  fireEvent(){
    console.log("Button clicked");
    this.myevent.emit(this.ChildData);
  }
}
