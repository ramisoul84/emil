import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  work = [
    {
      title: 'Birds',
      description: 'description',
      options: {
        path: '/assets/birds.json',
      },
    },
    {
      title: 'Waha',
      description: 'description',
      options: {
        path: '/assets/waha.json',
      },
    },
  ];
}
