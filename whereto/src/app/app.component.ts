import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show !: string ;
  url !: string ;
  cercaShow(anime: HTMLInputElement): boolean {
    this.show = anime.value.split(' ').join('+'); 
    this.url = 'https://www.google.com/search?q=where+to+watch+' + this.show;  
    window.open(this.url, '_blank');
    return false
  }
}
