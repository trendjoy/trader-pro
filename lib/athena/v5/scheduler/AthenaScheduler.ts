export class AthenaScheduler{

  private timer:NodeJS.Timeout|null=null;

  start(callback:()=>Promise<void>,interval=5000){

    if(this.timer){

      return;

    }

    this.timer=setInterval(

      ()=>{

        callback();

      },

      interval,

    );

  }

  stop(){

    if(!this.timer){

      return;

    }

    clearInterval(this.timer);

    this.timer=null;

  }

}
