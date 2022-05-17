import { Component, Input, OnInit } from '@angular/core';
import { CatDisplay } from 'src/app/shared/models/cat-display.interface';
import { SearchService } from 'src/app/shared/services/search.service';
import { LoginComponent } from 'src/app/user/login/login.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {

  @Input() cats :CatDisplay

  @Input () addedToWishList: boolean;
  constructor(private youtube:SearchService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }



  handleAddToWishList()
  {
    if (localStorage.getItem('token') != null){
      LoginComponent.wishlist = LoginComponent.wishlist.concat({"id" : this.cats.videoId});
      this.addedToWishList = true;
      this.youtube.UpdateFavEntry(JSON.stringify(LoginComponent.wishlist));
  }
  else{
    this.toastr.error('Log in to add favorites.', 'Invalid Action.');
  }
    }

    handleRemoveWishList()
    {
      this.youtube.SearchAndDestroy(this.cats.videoId);
        this.youtube.UpdateFavEntry(JSON.stringify(LoginComponent.wishlist));
        this.addedToWishList = false;
}
}
