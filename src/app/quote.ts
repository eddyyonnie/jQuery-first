export class Quote {
    public showDescription:boolean;
    constructor(public id:number, public name:string,public description:string,public compleDate:Date, public upvote:number,public downvote:number){
      this.showDescription=false;
    }
  
  }
  