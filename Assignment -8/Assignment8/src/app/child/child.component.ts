import { Component , Output, EventEmitter, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() public myEvent = new EventEmitter();
  public userValue = "";
  
  public sendData(val : any){
    this.userValue = val;
    this.myEvent.emit(this.userValue);
  }

  @Input() public parentData : any;
  @Output() public event = new EventEmitter();
  public ChildToParent(){
    this.event.emit("Hello From child");
  }

}
