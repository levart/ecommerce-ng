import { Component } from '@angular/core';
import {HeroBannerComponent} from "../../components/hero-banner/hero-banner.component";

@Component({
  selector: 'alte-home',
  standalone: true,
  imports: [
    HeroBannerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
