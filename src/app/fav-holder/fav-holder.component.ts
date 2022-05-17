import { Component, OnInit } from '@angular/core';

import { SearchService } from '../shared/services/search.service';
import { LoginComponent } from '../user/login/login.component';

@Component({
  selector: 'app-fav-holder',
  templateUrl: './fav-holder.component.html',
  styleUrls: ['./fav-holder.component.css']
})
export class FavHolderComponent implements OnInit {

  public data:any;

  constructor(private youtube:SearchService) { }

  ngOnInit(): void {
      this.data=this.youtube.getWishlist();
      console.log(this.data);
  }



  handleRemoveWishList(item)
      {
        console.log(item);
        this.youtube.SearchAndDestroy(item);
        this.youtube.UpdateFavEntry(JSON.stringify(LoginComponent.wishlist));
        this.data = this.youtube.getWishlist();
  }



  reloadCurrentPage() {
    setTimeout(function(){
      window.location.reload();
    },10000);

   }
}
