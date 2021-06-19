import { Observer, Subject } from "./observer";

export class SMSModule extends Observer {
    constructor(subject: Subject) {
        super();
        this.subject = subject;
        this.subject.addObserver(this);
    }

    update(): void {
        console.log("O Status do seu pedido foi atualizado: ", this.subject.getState());
    }
}