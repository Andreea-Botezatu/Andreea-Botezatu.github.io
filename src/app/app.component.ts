import { Component } from '@angular/core';
import { NgbCarouselModule  } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'PIUG_L2-4';
  image1:any = "./assets/images/carousel1.jpg";
  image2:any = "./assets/images/carousel2.jpg";
  image3:any = "./assets/images/carousel3.jpg";
}
