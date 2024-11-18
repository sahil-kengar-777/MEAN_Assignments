import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment8';
  public ChildValue : any;
  public Msg : string = "Hello From Parent";
  public ChildData : any;
  public inputVal : any = "";
  public inputData : any = "";

  ngOnInit() {
    const textField = document.getElementById('textBox2') as HTMLInputElement;  
    textField.addEventListener('input', () => {
      this.inputData = textField.value;
    });
  }

}
