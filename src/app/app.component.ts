import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  pContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
  posts = [ new Post("Mon premier post", "Lorem ipsum dolor sit amet, consectetur adipiscing", 2),
            new Post("Mon deuxième post", "Lorem ipsum dolor sit amet, consectetur adipiscing", -3),
          new Post("Encore un post", "Lorem ipsum dolor sit amet, consectetur adipiscing", 0)];

}
