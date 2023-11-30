import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  title = 'PIUG_L2-4';
  image1:any = "./assets/images/carousel1.jpg";
  image2:any = "./assets/images/carousel2.jpg";
  image3:any = "./assets/images/carousel3.jpg";
}
