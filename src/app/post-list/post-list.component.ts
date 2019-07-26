import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Post[];


  constructor(private postsService: PostsService, private router: Router) { }


  ngOnInit() {
    this.postsService.getPosts().subscribe(actionArray => {
        this.posts = actionArray.map(item => {
          return {id: item.payload.doc.id,
            ...item.payload.doc.data() }as Post;
        });

    }
 );



  }



}
