import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'ngx-lottie/lib/symbols';

interface Service {
  title: string;
  description: string;
  options: AnimationOptions;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'DESIGN',
      description:
        'I offer my architectural design services in the fields of interier, exterior and landscape design, my experience and skills across these areas is tested by numbers challenges and projects.',
      options: {
        path: '/assets/design.json',
      },
    },
    {
      title: 'Art Direction',
      description:
        'I offer consultation and direction service for visual art project across all disciplines, my experience in this field is rich, and i can help you reach your clients with the appropriate message.',
      options: {
        path: '/assets/art.json',
      },
    },
    {
      title: 'Visualisation',
      description:
        'I visualised through my career a lot of competition as well as realised projects, and I will use this experience with visuals in the service of your architectural project, to represent it in the most appropriate and captivating way.',
      options: {
        path: '/assets/visualisation.json',
      },
    },
  ];
}
