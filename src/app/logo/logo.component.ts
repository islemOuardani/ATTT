import { Component, OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css',
})
export class LogoComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    const imageWrapper = document.querySelector('.image-wrapper') as HTMLElement;
    const imageItems = document.querySelectorAll('.image-wrapper > *');
    const imageLength = imageItems.length;
    const perView = 12;
    let totalScroll = 0;
    const delay = 5000;

    imageWrapper.style.setProperty('--per-view', perView.toString());
    for (let i = 0; i < perView; i++) {
      imageWrapper.insertAdjacentHTML('beforeend', (imageItems[i] as HTMLElement).outerHTML);
    }

    let autoScroll = setInterval(scrolling, delay);

    function scrolling() {
      totalScroll++;
      if (totalScroll == imageLength + 1) {
        clearInterval(autoScroll);
        totalScroll = 1;
        imageWrapper.style.transition = '0s';
        imageWrapper.style.left = '0';
        autoScroll = setInterval(scrolling, delay);
      }
      const widthEl = (document.querySelector('.image-wrapper > :first-child') as HTMLElement).offsetWidth + 24;
      imageWrapper.style.left = `-${totalScroll * widthEl}px`;
      imageWrapper.style.transition = '.3s';
    }
  }
}