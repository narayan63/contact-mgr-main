import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  randomText = 'Some quick example text to build on the card title...';

  today = new Date();

  dummyText = 'Laboriosam beatae iste totam optio ipsum maxime officia.';

  constructor() { }

  ngOnInit(): void {
  }

}
