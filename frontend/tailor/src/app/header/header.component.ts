import { Component,HostListener } from '@angular/core';
import { GlobalService } from '../global.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  scrollPosition:number=0;
  movesUpHeader:any;
  movesDownHeader:any;
  constructor(public global:GlobalService ){
   
  }
  @HostListener('window:scroll',['$event'])
  onScroll=()=>{
   if(this.scrollPosition<window.scrollY){
    this.movesDownHeader=false;
      this.movesUpHeader=true;
      
      this.scrollPosition=window.scrollY;
      
   }
   else{
    this.movesUpHeader=false;
    this.movesDownHeader=true;
    this.scrollPosition=window.scrollY;
  
   }

  }
}
