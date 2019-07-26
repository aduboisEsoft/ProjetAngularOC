import { Subject, Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { Post } from '../models/post.model';
import { AngularFirestore } from '@angular/fire/firestore'


@Injectable()
export class PostsService {




  constructor(private firestore: AngularFirestore)
  {


  }


  getPosts()
  {

  return  this.firestore.collection('posts', post => post.orderBy('created_at', 'desc')).snapshotChanges();



  }



  createNewPost(newPost: Post) {

    return this.firestore.collection('posts').add(<Post>newPost.getData());

  }

  removePost(id)
  {
    this.firestore.collection('posts').doc(id).delete();
  }

  updatePost(post: Post)
  {

    return this.firestore.collection('posts').doc(post.id).update(post);

  }

}
