import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { list } from 'postcss';
import { List } from 'lodash';
import { RouterLink } from '@angular/router';

interface service{
  label: string,
  img: string,
  link: string,
}

@Component({
  selector: 'app-services-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.css',
})

export class ServicesPageComponent {
  services: service[] = [
    {
      label: 'Website Development',
      img: '/assets/img/website_development.png',
      link: '/website_development',
    },
    {
      label: 'Mobile App Development',
      img: '/assets/img/mobile_app_development.png',
      link: '/mobile_app_development',
    },
    {
      label: 'UI/UX Design',
      img: '/assets/img/ui_ux_design.png',
      link: '/ui_ux_development',
    },
    {
      label: 'Graphic Designing',
      img: '/assets/img/graphic_designing.png',
      link: '/graphic_designing',
    },
    {
      label: 'Branding',
      img: '/assets/img/branding.png',
      link: '/brandin',
    },
    {
      label: 'Logo Designing',
      img: '/assets/img/logo_designing.png',
      link: '/log_designing',
    },
  ];
}
