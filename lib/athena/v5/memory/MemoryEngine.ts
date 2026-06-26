export class MemoryEngine{

  private history:any[]=[];

  private readonly MAX_HISTORY=30;

  push(snapshot:any){

    this.history.push(snapshot);

    if(this.history.length>this.MAX_HISTORY){

      this.history.shift();

    }

  }

  latest(){

    return this.history.at(-1);

  }

  previous(){

    return this.history.at(-2);

  }

  all(){

    return [...this.history];

  }

  size(){

    return this.history.length;

  }

}
