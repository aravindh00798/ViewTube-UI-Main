import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Video } from '../models/search.interface';
import { LoginComponent } from 'src/app/user/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public ul = "";

  public testing :any
  public setTest(value: any) {
    return this.testing = value;
}

private API_URL = 'https://www.googleapis.com/youtube/v3/';
private API_TOKEN = 'AIzaSyBig3j8GHSZnzGXti5VLW6TGQ1Le8vTgik';
  userDetails;

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  getVideos(query: string): Observable <Video[]>
  {
    const url = `${this.API_URL}search?q=${query}&key=${this.API_TOKEN}&part=snippet&type=video&maxResults=12`;
    return this.http.get<Video[]>(url)
      .pipe(
        map((response: any) => response.items)
      );
  }



  getWishlist() {
        let VideosIds = []

        if(LoginComponent.wishlist!=null){
          for (var i = 0; i < LoginComponent.wishlist.length; i++) {
            VideosIds.push(LoginComponent.wishlist[i]["id"])
          }
        }
        return VideosIds;
  }



    getPopularVideos(): Observable <any> {
      const url = `${this.API_URL}videos?part=snippet&regionCode=in&maxResults=12&chart=mostPopular&key=${this.API_TOKEN}`;
      return this.http.get(url)
        .pipe(
          map((response: any) => response.items)
        );
        }
    getCategories():Observable<any>{
      const url = `${this.API_URL}videoCategories?part=snippet&regionCode=in&key=${this.API_TOKEN}`;
      return this.http.get(url)
      .pipe(
        map((response: any) => response.items)
      );
      }
     getOne(id):Observable<any>
      {

        const url=`${this.API_URL}videos?part=snippet&regionCode=in&maxResults=12&videoCategoryId=${id}&chart=mostPopular&key=${this.API_TOKEN}`;
        this.ul=url
        return this.http.get(url)
        .pipe(
          map((response: any) => response.items)
        );

  }
      getCatView(){
        return this.http.get(this.ul)
        .pipe(
          map((response: any) => response.items)
        );
      }

    readonly BaseURI = 'https://localhost:44328/api/gateway';

    formModel = this.fb.group({
      UserName: ['', Validators.required],
      Email: ['', Validators.email],
      FullName: [''],
      Passwords: this.fb.group({
        Password: ['', [Validators.required, Validators.minLength(4)]],
        ConfirmPassword: ['', Validators.required]
      }, { validator: this.comparePasswords })

    });

    comparePasswords(fb: FormGroup) {
      let confirmPswrdCtrl = fb.get('ConfirmPassword');
      //passwordMismatch
      //confirmPswrdCtrl.errors={passwordMismatch:true}
      if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
        if (fb.get('Password').value != confirmPswrdCtrl.value)
          confirmPswrdCtrl.setErrors({ passwordMismatch: true });
        else
          confirmPswrdCtrl.setErrors(null);
      }
    }

    register() {
      var body = {
        UserName: this.formModel.value.UserName,
        Email: this.formModel.value.Email,
        FullName: this.formModel.value.FullName,
        Password: this.formModel.value.Passwords.Password
      };
      return this.http.post(this.BaseURI + '/register', body);
    }

    login(formData) {
      return this.http.post(this.BaseURI + '/login', formData);
    }


    getUserProfile() {
      return this.http.get(this.BaseURI + '/userprofile', {headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))});
    }


    CreateFavEntry(_username:string, _json:string){
      var fav = {
        Id: _username,
        Json: _json
      };
        return this.http.post(this.BaseURI + '/favorite', fav);

    }

    UpdateFavEntry(wishlist:string){
          this.getUserProfile().subscribe(
            res => {this.userDetails = res;
            var fav = {
              Id: this.userDetails.userName,
              Json: wishlist
            };
            console.log(fav);
            this.http.put(this.BaseURI + '/favorite/' + this.userDetails.userName, fav).subscribe(res => {}, err => {console.log(err);},);
          },
            err => {console.log(err);},
          );
    }

     GetFavEntries(){
      this.getUserProfile().subscribe(
        res => {this.userDetails = res;
        return this.http.get(this.BaseURI + '/favorite/' + this.userDetails.userName).subscribe(res => {this.userDetails = res;
          if(this.userDetails.json == ""){
            LoginComponent.wishlist = [{}];
            LoginComponent.wishlist.shift();
          }
          else{
            LoginComponent.wishlist = JSON.parse(this.userDetails.json);
          }
          }, err => {console.log(err);},);
      },
        err => {console.log(err);},
      );
    }

    SearchAndDestroy(value: string) {
      var position = null;
   for (var i = 0; i < LoginComponent.wishlist.length; i++) {
        if(LoginComponent.wishlist[i]["id"]["videoId"] == value){
          position = i;
          break;
        };
      }
      LoginComponent.wishlist.splice(position,1);

    }

      filterdata: any[];


       get data(): any{
        return this.filterdata;
      }

      set data(val: any){
        this.filterdata = val;
        console.log(this.filterdata);
      }
}



