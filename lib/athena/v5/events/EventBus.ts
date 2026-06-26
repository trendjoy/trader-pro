export type EventHandler = (payload:any)=>void;

export class EventBus{

  private listeners=new Map<string,EventHandler[]>();

  on(event:string,handler:EventHandler){

    const handlers=this.listeners.get(event) ?? [];

    handlers.push(handler);

    this.listeners.set(event,handlers);

  }

  emit(event:string,payload:any){

    const handlers=this.listeners.get(event);

    if(!handlers)return;

    handlers.forEach(handler=>handler(payload));

  }

}
