import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';
import { GalleryService } from '../_services/gallery.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
  animations: [ slideInDownAnimation ]
})
export class AboutmeComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  @HostBinding('style.left')  left = '0';
  @HostBinding('style.right')  right = '0';

  aboutMeText:string = ""; 

  constructor(private _galleryService: GalleryService) { }

  ngOnInit() {
    this._galleryService.getAboutMe().subscribe(
      result => {
        this.aboutMeText = result.aboutMeText;
      }
    )
  }

}
