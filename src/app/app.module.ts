import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './search/components/search-input/search-input.component';
import { SearchListComponent } from './search/components/search-list/search-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { HomeComponent } from './home/home.component';
import { SearchService } from './shared/services/search.service';
import { FavHolderComponent } from './fav-holder/fav-holder.component';
import { CatBtnComponent } from './cat-wise/cat-btn/cat-btn.component';
import { CatContainerComponent } from './cat-wise/cat-container/cat-container.component';
import { CatListComponent } from './cat-wise/cat-list/cat-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { PopularButtonComponent } from './popular/components/popular-button/popular-button.component';
import { PopularListComponent } from './popular/components/popular-list/popular-list.component';
import { PopularContainerComponent } from './popular/container/popular-container/popular-container.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
// import { AuthInterceptor } from './auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    SearchListComponent,
    
    UserComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    FavHolderComponent,
    CatBtnComponent,
    CatContainerComponent,
    CatListComponent,
    CategoriesComponent,
    PopularButtonComponent,
    PopularListComponent,
    PopularContainerComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule, BrowserAnimationsModule,MatIconModule,MatToolbarModule,
    MatSelectModule,MatDialogModule,MatButtonModule,ReactiveFormsModule, FormsModule,MatCardModule, YouTubePlayerModule, MatInputModule,ToastrModule.forRoot({progressBar: true})
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
