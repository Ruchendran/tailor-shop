import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(){

  }

  ngOnInit(): void {
    let speech=new SpeechSynthesisUtterance();
    speech.text='you are navigated to home page!';
    let speechInstance=window.speechSynthesis;
    speechInstance.speak(speech);
  }

}
