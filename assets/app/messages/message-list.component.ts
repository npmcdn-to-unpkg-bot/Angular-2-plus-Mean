import {Component} from "angular2/core";

@Component({
  selector: 'my-message-list',
  template: `
    <section class="col-md-8 col-md-offset-2">
      <my-message *ngFor="let message of messages" [message]="message" (editClicked)="message.content = $event"></my-message>
    </section>
  `
})

export class MessageListComponent {
  
}