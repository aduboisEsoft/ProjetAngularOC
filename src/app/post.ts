export class Post {
  public title: string;
  public content: string;
  public loveIts: number;
  public created_at: Date;

  constructor(_title: string, _content: string, _loveIts: number)
  {
    this.title = _title;
    this.content = _content;
    this.loveIts = _loveIts;
    this.created_at = new Date();
  }
}
