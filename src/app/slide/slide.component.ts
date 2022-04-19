import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.less'],
})
export class SlideComponent implements OnInit {

  @Input() isVisible: boolean = false;

  public id?: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle() {
    this.isVisible = !this.isVisible;
  }

}
