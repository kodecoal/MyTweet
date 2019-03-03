import { Component, OnInit } from '@angular/core';
import { Tweet } from '../model/Tweet';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})


export class TweetsComponent implements OnInit {
  tweetsTitle = 'MIS TWEETS';
  miTweet: Tweet;

  constructor() {
    this.miTweet = {
      id: 1,
      texto: 'You know something is unusual when your code runs perfect at first time',
      autor: 'JustADevGuy'
      };
  }

  ngOnInit() {

  }

}
