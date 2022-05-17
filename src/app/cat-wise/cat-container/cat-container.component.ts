import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/shared/services/search.service';
import { CatDisplay } from 'src/app/shared/models/cat-display.interface';
@Component({
  selector: 'app-cat-container',
  templateUrl: './cat-container.component.html',
  styleUrls: ['./cat-container.component.css']
})
export class CatContainerComponent  {


  inputTouched = false;
  loading = false;
  catList: CatDisplay[] = [];
  wishlist: any[] = [];

  constructor(private searchService: SearchService,private youtube:SearchService) { }

  handleSearch() {
    this.loading = true;
    this.searchService.getCatView()
      .subscribe((items: any) => {
        this.catList = items.map(item => {
          return( {
            title: item.snippet.title,
            videoId: item.id,
            videoUrl: `https://www.youtube.com/watch?v=${item.id}`,
            channelId: item.snippet.channelId,
            channelUrl: `https://www.youtube.com/channel/${item.snippet.channelId}`,
            channelTitle: item.snippet.channelTitle,
            description: item.snippet.description,
            publishedAt: new Date(item.snippet.publishedAt),
            thumbnail: item.snippet.thumbnails.high.url
          });
        });

        this.inputTouched = true;
        this.loading = false;
        this. loadWishlist();

      });
  }

  loadWishlist(){
    this.wishlist = this.youtube.getWishlist();
    }
}

