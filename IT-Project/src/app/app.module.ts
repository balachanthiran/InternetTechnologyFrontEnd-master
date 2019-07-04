import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GalleryService } from './_services/gallery.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    GalleryComponent,
    AboutmeComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        {path: '', component: LoginComponent, pathMatch: 'full' },
        {path: 'signup', component: SignupComponent},
        {path: 'gallery', component: GalleryComponent},
        {path: 'aboutme', component: AboutmeComponent},
        {path: 'pagenotfound', component: PagenotfoundComponent},
        {path: '**', redirectTo: 'pagenotfound'}
      ])
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
