import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { TimeCountPipe } from '../time-count.pipe'

@Component({
  selector: 'app-quote',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class quotesComponent implements OnInit {
  quotes=[
    new Quote(1,'brainiac','He who finds a wife finds a good thin',new Date(2019,2,15),0,0),
    new Quote(2, 'nerd','Money can never buy you happyness',new Date(2019,2,15),0,0),
 
  ];
  toogleDetails(index){
    this.quotes[index].showDescription=!this.quotes[index].showDescription;
  }
  deleteQuote(isComplete,index){
    if(isComplete){
      let toDelete=confirm(`Are you sure you want to delete `)
      if(toDelete==true){
        this.quotes.splice(index,1)
      }
      else{
        alert("Not deleted")
      }

    }
  }
  quote:Quote;
  addNewGaol(quotes:Quote){
    
    this.quote=new Quote(1,"","",new Date(),0,0)
    let quotesLength=this.quotes.length;
    quotes.id=quotesLength+1;
    quotes.compleDate=new Date(quotes.compleDate)
    this.quote=quotes
   // this.upvote(this.quote)
    this.quotes.push(this.quote);
  }
  upvote(quote:Quote){
    quote.upvote+=1
  }
  downvote(quote:Quote){
    quote.downvote+=1
  }

  constructor() { }

  ngOnInit() {
  }

}

