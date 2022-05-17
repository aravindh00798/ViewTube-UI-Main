export class Categories {
  id:string;
  videoId: string;
  videoUrl: string;
  channelId: string;
  channelUrl: string;
  channelTitle: string;
  title: string;
  publishedAt: Date;
  description: string;
  thumbnail: string;
  assignable:string;
  constructor(videoId: string,videoUrl: string,channelId: string,channelUrl: string,channelTitle: string,title: string,publishedAt: Date,description: string,thumbnail: string)
  {
this.videoId=videoId
this.videoUrl=videoUrl
this.channelId=channelId
this.channelUrl=channelUrl
this.title=title;
this.publishedAt=publishedAt
this.description=description
this.thumbnail=thumbnail
this.channelTitle=channelTitle

  }
}
