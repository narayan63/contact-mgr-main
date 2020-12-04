import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="text-center">
      <hr>
      <app-menu>
        <li class="nav-item">
          <a class="nav-link" href="#">Back to Top</a>
        </li>
      </app-menu>
      <p class='redText'>Copyright 2020 | Narayan</p>
      <p class='happyText'>Happily project developed by Narayan  </p>
    </div>
  `,
  styles: [
    `
      .happyText{
        color: teal;
        font-size: 12px;
      }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
