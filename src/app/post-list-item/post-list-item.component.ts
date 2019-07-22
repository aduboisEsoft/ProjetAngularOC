import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {


@Input() post: Post;
  constructor() { }

  ngOnInit() {
  }

//Méthode pour renvoyer la couleur :
//  - verte si le compteur est > 0
//  - rouge si le compteur est < 0
//  - noir si le compteur est 0 (par défaut)
getColor()
{

  var nbr  = this.post.loveIts;
  var color = "black";
  if(nbr > 0)
  {
    color = "green";
  }
  else if(nbr < 0)
  {
    color = "red";
  }
  return color;
}

//Méthode pour incrémenter/décrémenter le loveIts du Post
onCompte(nbr)
{
  this.post.loveIts += nbr;

}

}
