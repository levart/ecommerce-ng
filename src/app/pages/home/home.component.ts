import {Component, inject} from '@angular/core';
import {HeroBannerComponent} from "../../components/hero-banner/hero-banner.component";
import {FeatureCardComponent} from "../../components/feature-card/feature-card.component";
import {FEATURES} from "../../data/features";
import {CategoryFacade} from "../../facades/category.facade";
import {AsyncPipe, JsonPipe} from "@angular/common";

@Component({
  selector: 'alte-home',
  standalone: true,
  imports: [
    HeroBannerComponent,
    FeatureCardComponent,
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  features = FEATURES;

  categoryFacade = inject(CategoryFacade)

  categories$ = this.categoryFacade.getCategories()
}
