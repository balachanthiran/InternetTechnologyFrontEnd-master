import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';
import { GalleryService } from '../_services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  animations: [slideInDownAnimation]
})
export class GalleryComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  @HostBinding('style.left') left = '0';
  @HostBinding('style.right') right = '0';

  imageurl: any = "";

  //imageArray: string[] = ['http://i1.kym-cdn.com/photos/images/newsfeed/001/183/604/ee9.png', 'http://i.imgur.com/fhHuvIP.jpg', 'http://i.imgur.com/2VeEUTS.jpg', 'https://media.giphy.com/media/Vg0JstydL8HCg/giphy.gif'];
  index: number = 0;

  currentGallery: string[] = [];

  constructor(private _galleryService: GalleryService) {
  }

  ngOnInit(): void {
    this._galleryService.getGallery().subscribe(
      result => {
        this.currentGallery = result;
        this.imageurl = this.currentGallery[0];
      }
    )
  }

  readUrl(event) {
    // If a files is selected, the event is true AND if the file is opened,
    // it is in index 0, so the event is true
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      // When file loaded, this event is triggered. Now the file can be read
      reader.onload = (event: any) => {
        this.imageurl = event.target.result;

        // Push image base64 string into array 
        this._galleryService.insertImage(this.imageurl).subscribe(
          result => {
            if (result == true) {
              //inform user about error
              this.currentGallery.push(this.imageurl);
            }
          },
          err => {
            console.log("Error: " + err);
          }
        );
        // When image is added, the index number must change to this image's
        this.index = this.currentGallery.length - 1;
      }

      // The file opened is read as data URL and the image can be previewed
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  nav(i) {
    this.showImage(this.index += i);

  }

  showImage(i) {

    // Image array wrap
    if (i > this.currentGallery.length - 1) {
      this.index = 0;
    }
    if (i < 0) {
      this.index = this.currentGallery.length - 1;
    }

    // Index of the url of the image 
    this.imageurl = this.currentGallery[this.index];
  }

  // Display the selected image from preview list
  selectImage(i) {
    this.showImage(this.index = i);

  }





}
