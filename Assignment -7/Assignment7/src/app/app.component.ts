import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from "./first/first.component";
import { SecondComponent } from "./second/second.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponent, SecondComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment7';
  public fun(){
    return "Marvellous Infosystems";
  }

  public swapText : string = "Marvellous Infosystems";
  public swap(){
    this.swapText = "Educating for Better Tomorrow";
  }

  public Name = "Marvellous Infosystems";
  public Upper(){
    this.Name = this.Name.toUpperCase();
  }
  public Lower(){
    this.Name = this.Name.toLowerCase();
  }
}
