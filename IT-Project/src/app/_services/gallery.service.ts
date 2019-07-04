import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class GalleryService {

    options = new RequestOptions({ 'headers': new Headers({ 'Content-Type': 'application/json' }) });

    constructor(private http: Http) {
    }

    insertImage(imageURL: string) {
        return this.http.post('http://localhost:61079/api/gallery', JSON.stringify(imageURL), this.options)
            .map((response: Response) => {
                if (response.ok) {
                    return true;
                } else {
                    return false;
                }
            });


    }

    getGallery(){
        return this.http.get('http://localhost:61079/api/gallery', this.options)
            .map((response: Response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    return false;
                }
            });
    }

    getAboutMe(){
           return this.http.get('http://localhost:61079/api/aboutme', this.options)
            .map((response: Response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    return false;
                }
            });
    }
}