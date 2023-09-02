import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myFirstApp';
  skills : Array<string> =["Angular" , "CSS" , "Javascript" , "html" ];
  items : Array<string> = ["item1" ,"item2","item3","item4"]
  books : Array<string> = ["The Guide", "A Fine Balance" , "Midnights Children" , "God of Small Things" , "  The Inheritance of Loss" , "Gitanjali"]
  PrimeMinister  : Array<string> =["Jawahar Lal Nehru" ,"Gulzarilal Nanda" ,"Lal Bahadur Shastri" ,"Gulzari Lal Nanda " ,"Indira Gandhi" ,"Morarji Desai" ,"Charan Singh" ,"Indira Gandhi" ,"Rajiv Gandhi"]
  flims : Array<string> = ["Iron-Man" ," The Incredible Hulk" ,"Iron Man 2" ,"Thor" ,"Captain America: The First Avenger","The Avengers" ," Iron Man 3" ,"Thor: The Dark World" ,"Captain America: The Winter Soldier" ,"Guardians of the Galaxy"]

  
}
