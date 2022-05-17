import { Component, Input, OnInit } from '@angular/core';
import { Popular } from 'src/app/shared/models/popular.interface';
import { SearchService } from 'src/app/shared/services/search.service';
import { LoginComponent } from 'src/app/user/login/login.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-popular-list',
  templateUrl: './popular-list.component.html',
  styleUrls: ['./popular-list.component.css']
})
export class PopularListComponent implements OnInit {

  @Input() populars : Popular;
  @Input () addedToWishList: boolean;

  constructor(private youtube:SearchService, private toastr: ToastrService) { }

  ngOnInit() {

  }

  handleAddToWishList()
  {
    if (localStorage.getItem('token') != null){
      LoginComponent.wishlist = LoginComponent.wishlist.concat({"id" : this.populars.videoId});
      this.addedToWishList = true;
      this.youtube.UpdateFavEntry(JSON.stringify(LoginComponent.wishlist));
  }
  else{
    this.toastr.error('Log in to add favorites.', 'Invalid Action.');
  }
    }


    handleRemoveWishList()
    {
      this.youtube.SearchAndDestroy(this.populars.videoId);
        this.youtube.UpdateFavEntry(JSON.stringify(LoginComponent.wishlist));
        this.addedToWishList = false;
}


}
