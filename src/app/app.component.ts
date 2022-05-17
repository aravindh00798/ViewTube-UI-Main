import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from './shared/models/search.interface';
import { SearchService } from './shared/services/search.service';
import { LoginComponent } from './user/login/login.component';
import {MatDialog} from '@angular/material/dialog';
import { RegistrationComponent } from './user/registration/registration.component';
import { CategoriesComponent } from './categories/categories.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  getbacks :boolean=false
  categories:boolean =false
  showMe:boolean=false
  inputBar =true;
  inputTouched = false;
  loading = false;
  videosList: Video[]=[]
  wishlist: any[] = [];
  title = 'ViewTube';
  ga:boolean=false;
  userDetails;
  constructor(private router:Router, private service: SearchService,public dialog: MatDialog) {


  }
  onLogin(){
    this.router.navigate(['/user/login']);
  }
  isUserLoggedIn: boolean;
  json_array = [{}];

  ngOnInit(): void {
    if (localStorage.getItem('token') != null){
      this.isUserLoggedIn = true;
      this.service.GetFavEntries();
      this.service.getUserProfile().subscribe(
        res => {this.userDetails = res; console.log(this.userDetails)},
        err => {console.log(err);},
      );
    }
    else this.isUserLoggedIn = false;
}
  onLogout(){
    localStorage.removeItem('token');
    this.isUserLoggedIn = false;
    this.router.navigate(['/home']);
  }

  Send(){
   for(let item of LoginComponent.wishlist){
     console.log(item["id"]);
   }
  }


  handleSearch(inputValue: string)
  {
    this.loading = true;
    this.service.getVideos(inputValue)
      .subscribe((items: any) => {
        this.videosList = items.map(item => {
          return {
            title: item.snippet.title,
            videoId: item.id.videoId,
            videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
             channelId: item.snippet.channelId,
            channelUrl: `https://www.youtube.com/channel/${item.snippet.channelId}`,
            channelTitle: item.snippet.channelTitle,
            description: item.snippet.description,
            publishedAt: new Date(item.snippet.publishedAt),
            thumbnail: item.snippet.thumbnails.high.url
          };
        });
        this.inputTouched = true;

        this.loading = false;
        if(this.categories==true)
          this.ga=true
          this.service.data=this.ga;


        this. loadWishlist();
      });

    }

      loadWishlist(){
      this.wishlist = this.service.getWishlist();
      }


toogleTag()
{
 this.showMe=!this.showMe
}

category(){
  this.categories=true;
  this.inputTouched=false;


}
getBack(){
  this.getbacks=false;
  this.categories=false;
  this.inputTouched=false;


   }
 HomePage() {
   window.location.assign('/home');



}


openlogin() {
  const dialogRef = this.dialog.open(LoginComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

openSignup() {
  const dialogRef = this.dialog.open(RegistrationComponent,{
    panelClass : 'signup'
  })

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
// openCategories() {
//   const dialogRef = this.dialog.open(CategoriesComponent,{
//     panelClass:'dialog-responsive'
//   })

//   dialogRef.afterClosed().subscribe(result => {
//     console.log(`Dialog result: ${result}`);
//   });
// }


}


