import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-num-convertor',
  imports: [FormsModule],
  templateUrl: './num-convertor.component.html',
  styleUrl: './num-convertor.component.css'
})
export class NumConvertorComponent {
  inputValue: string = '';
  fromBase: string = '10'; 
  toBase: string = '10'; 
  result: string = '0';


  convert() {
    if (!this.inputValue) {
      this.result = 'Invalid Input';
      return;
    }

    try {
      const decimalValue = parseInt(this.inputValue, parseInt(this.fromBase));
      this.result = decimalValue.toString(parseInt(this.toBase)).toUpperCase();
    } catch (error) {
      this.result = 'Error in Conversion';
    }
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.result).then(
      () => alert('Result copied to clipboard!'),
      () => alert('Failed to copy!')
    );
  }

  clear() {
    this.inputValue = '';
    this.result = '0';
  }
}
