import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  newQuote=new Quote(0,"","",new Date(),0,0);
  @Output() output=new EventEmitter<Quote>();
  submitQuote(){
    this.output.emit(this.newQuote)
    this.newQuote=new Quote(0,"","",new Date(),0,0);

  }

  constructor() { }

  ngOnInit() {
  }

}
