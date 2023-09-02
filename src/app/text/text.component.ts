import { Component, OnInit } from "@angular/core";

 interface ITextComponent{
    name: string;
    party: string;
    longestContinuousTerm: string;
    totalYearOfPremiership: string;
}[]





@Component({
    selector: "app-text",
    templateUrl : "./text.component.html",
    styleUrls :["./text.component.scss"]
    
})




export class TextComponent implements OnInit{
 ngOnInit(): void {
     throw new Error("Method not implemented.");
 }
    
 pmObj: ITextComponent[]=[{
    name :"Jawaharlal Nehru" ,
      party:  "INC",
    longestContinuousTerm :"16 years, 286 days" ,
    totalYearOfPremiership: "16 years, 286 days",  
 },
 {
    name :"Indira Gandhi",
      party:"INC"  ,
    longestContinuousTerm :"11 years, 59 days" ,
    totalYearOfPremiership:"15 years, 350 days" ,  
 },
 {
    name :"Manmohan Singh",
      party:"INC"  ,
    longestContinuousTerm :"10 years, 4 days" ,
    totalYearOfPremiership:"10 years, 4 days" ,  
 },
 {
    name :"Narendra Modi",
      party:"BJP"  ,
    longestContinuousTerm :"	9 years, 65 days" ,
    totalYearOfPremiership:"	9 years, 65 days" ,  
 },
 {
    name :"Atal Bihari Vajpayee",
      party:"BJP"  ,
    longestContinuousTerm :"6 years, 64 days" ,
    totalYearOfPremiership:"6 years, 80 days" ,  
 },
 {
    name :"Rajiv Gandhi",
      party:"INC"  ,
    longestContinuousTerm :"5 years, 32 days" ,
    totalYearOfPremiership:"5 years, 32 days" ,  
 },
 {
    name :"	P. V. Narasimha Rao",
      party:"INC"  ,
    longestContinuousTerm :"4 years, 330 days" ,
    totalYearOfPremiership:"4 years, 330 days" ,  
 },
 {
    name :"	Morarji Desai",
      party:"JP"  ,
    longestContinuousTerm :"2 years, 126 days" ,
    totalYearOfPremiership:"2 years, 126 days" ,  
 },
 {
    name :"	Lal Bahadur Shastri",
      party:"INC"  ,
    longestContinuousTerm :"1 year, 216 days" ,
    totalYearOfPremiership:"1 year, 216 days" ,  
 },
 {
    name :"	Vishwanath Pratap Singh",
      party:"JD"  ,
    longestContinuousTerm :"343 days" ,
    totalYearOfPremiership:"343 days " ,  
 },
 {
    name :"Inder Kumar Gujral",
      party:"JD"  ,
    longestContinuousTerm :"322 days" ,
    totalYearOfPremiership:"322 days" ,  
 },
 {
    name :"	H. D. Deve Gowda",
      party:"JD"  ,
    longestContinuousTerm :"324 days" ,
    totalYearOfPremiership:"324 days" ,  
 },
 {
    name :"Chandra Shekhar",
      party:"SJR(R)"  ,
    longestContinuousTerm :"223 days" ,
    totalYearOfPremiership:"233 days" ,  
 },
 {
    name :"Charan Singh",
      party:"JP(S)"  ,
    longestContinuousTerm :"170 days" ,
    totalYearOfPremiership:"170 days" ,  
 },
 {
    name :"Gulzarilal Nanda",
      party:"INC"  ,
    longestContinuousTerm :"13 days" ,
    totalYearOfPremiership:"13 days" ,  
 }
 
 ]
};
