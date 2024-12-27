import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumConvertorComponent } from "./num-convertor/num-convertor.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NumConvertorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SCI_Calculator';
}
