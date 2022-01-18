import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public arrBadWords: Array<string> = [];
  public arrText: Array<string> = [];
  public badWords!: string;
  public text!: string;
  public words: any;
  public check1 = true;
  public check2 = true;
  public a: any;
  public cenzor!: string;

  constructor(){}

  public checkCenzor(): void{
      if(this.text.length != 0)this.check2 = false;
      else this.check2 = true;
  }

  public check(): void{
      if(this.badWords.length != 0) this.check1 = false;
      else this.check1 = true;
  }

  public btnADD(): void{ 
      this.check1 = true;
      this.arrBadWords.push(this.badWords);
      this.words =  this.arrBadWords.join();
      this.badWords='';
  }

  public btnCenzor(): void{
    this.arrText = this.text.split(" ");
    for (let i = 0; i < this.arrBadWords.length; i++) {
      this.a = this.arrBadWords[i].toLowerCase();
      for (let j = 0; j < this.arrText.length; j++) {
          if (this.a == this.arrText[j].toLowerCase()) {
              this.arrText[j] = this.arrText[j].replace(/[\s\S]/g, "*");
              this.cenzor = this.arrText.join(' ');
              this.text = this.cenzor;
          }
      }
  }
}
  btnReset(): void{
      this.words = '';
      this.arrBadWords = [];
  }

}

