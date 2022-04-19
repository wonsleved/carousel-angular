import {Component, ContentChildren, AfterContentInit, ViewEncapsulation} from '@angular/core';
import { SlideComponent } from "../slide/slide.component";

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less'],
})
export class CarouselComponent implements AfterContentInit {

  @ContentChildren(SlideComponent) slidesList?:any;

  currentSlide = 0;

  constructor() { }

  ngAfterContentInit() {
    this.generateSlideId();
    console.log(this.slidesList.forEach((el: any) => console.log(el.id)));

    this.toggleSlide();
  }

  onPreviousClick() {
    this.toggleSlide();

    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slidesList.length - 1 : previous;

    this.toggleSlide();
  }

  onNextClick() {
    this.toggleSlide();

    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slidesList.length ? 0 : next;

    this.toggleSlide();
  }

  generateSlideId(): void {
    let idInstance: number = 0;
    this.slidesList.forEach((el: any) => el.id = idInstance++);
  }

  toggleSlide() {this.slidesList?.filter((el: any) => el.id === this.currentSlide)
      .forEach((el: any) => el.toggle());
  }
}
