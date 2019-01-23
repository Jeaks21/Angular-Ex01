import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, euismod et quam et, bibendum posuere ex. Aliquam at purus in leo finibus laoreet. Duis porta nisl ipsum, nec aliquet purus ultricies eu.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc nec imperdiet nisl. Fusce ut diam vel tellus suscipit aliquam ut at tortor. Aenean id augue vitae enim tristique lobortis at at ante. Phasellus ac velit porttitor, egestas metus sed, congue nunc. Aenean bibendum turpis at felis sodales tincidunt. Ut ullamcorper odio tellus, sit amet pellentesque diam ullamcorper et.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Nunc sit amet tellus porttitor, euismod massa ac, tincidunt magna. Vestibulum eget felis mauris. Nulla volutpat ac ipsum eget pulvinar. Integer euismod quam at ante euismod, sit amet lobortis libero imperdiet. Sed vitae porttitor est.',
      loveIts: 0,
      created_at: new Date()
    }
  ]

}
