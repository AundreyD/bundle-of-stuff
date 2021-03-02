import { Component } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from  '@angular/router';
import { ChatService } from  '../chat.service';
import { User } from  '../user';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy{

  public userId  =  '';
  public userList: any  = [];
  private subscriptions = new Subscription();

  constructor(private chatService: ChatService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.params.id;
    this.chatService.connectToChatkit(this.userId);
    this.subscriptions.add(this.chatService.getUsers().subscribe((users) => {
      this.userList = users;
    }));
  }

  public isOnline(user: User) {
    return this.chatService.isUserOnline(user);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
