import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  length: Number = 0;
  password: String = "";
  useNumbers: Boolean = false;
  useLetters: Boolean = false;
  useSymbols: Boolean = false;

  handleLengthChange(event: any) {
    const parsedNumber = event.target.value;
    if (!isNaN(parsedNumber)) {
      this.length = parsedNumber;
    }
  }

  handleUseNumbersChange() {
    this.useNumbers = !this.useNumbers;
  }

  handleUseLettersChange() {
    this.useLetters = !this.useLetters;
  }

  handleUseSymbolsChange() {
    this.useSymbols = !this.useSymbols;
  }
  handleGeneratePasswordBtnClick() {
    let validChars: String = "";
    let generatedPassword = "";
    if (this.useNumbers) {
      validChars += "1234567890";
    }
    if (this.useLetters) {
      validChars += "abcdefghijklmnopqrstuvwxyz";
    }
    if (this.useSymbols) {
      validChars += "~!@#$%^&*()";
    }
    for (let i = 0; i < this.length; i++) {
      generatedPassword +=
        validChars[Math.floor(Math.random() * validChars.length)];
    }
    this.password = generatedPassword;
  }
}
