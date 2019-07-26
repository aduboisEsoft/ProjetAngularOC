export class Post {
  id: string;

  constructor( public title: string, public content: string, public loveIts = 0, public created_at = Date.now())
  {

  }

  getData(): object {
          const result = {};
          Object.keys(this).map(key => result[key] = this[key]);
          return result;
      }

}
