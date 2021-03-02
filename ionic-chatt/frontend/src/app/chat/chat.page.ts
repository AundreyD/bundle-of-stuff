import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { ChatService } from  '../chat.service';
import { User } from  '../user';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  public messageList: any[] = [ ];
  public chatMessage = '';
  private subscriptions = new Subscription();


  constructor(private router: Router, private chatService: ChatService) { }

  ngOnInit() {
    this.subscriptions.add(this.chatService.getMessages().subscribe(messages  => {
      this.messageList  =  messages;
    }));
  }

  sendMessage() {
    this.chatService.sendMessage({text: this.chatMessage}).then(() => {
      this.chatMessage  =  '';
    });
  }

}
