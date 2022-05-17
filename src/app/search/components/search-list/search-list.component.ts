import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../../shared/models/search.interface';
import { SearchService } from 'src/app/shared/services/search.service';
import { LoginComponent } from 'src/app/user/login/login.component';
import { ToastrService } from 'ngx-toastr';
// import { timingSafeEqual } from 'crypto';


@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  @Input() videos: Video ;


  @Input () addedToWishList: boolean;


  constructor(private youtube:SearchService, private toastr: ToastrService) { }

  ngOnInit()
   {
   }



    handleAddToWishList()
    {
      if (localStorage.getItem('token') != null){
          LoginComponent.wishlist = LoginComponent.wishlist.concat({"id" : this.videos.videoId});
          this.addedToWishList = true;
          this.youtube.UpdateFavEntry(JSON.stringify(LoginComponent.wishlist));
      }
      else{
        this.toastr.error('Log in to add favorites.', 'Invalid Action.');
      }
    }

      handleRemoveWishList()
      {
        this.youtube.SearchAndDestroy(this.videos.videoId);
        this.youtube.UpdateFavEntry(JSON.stringify(LoginComponent.wishlist));
        this.addedToWishList = false;
  }


}





