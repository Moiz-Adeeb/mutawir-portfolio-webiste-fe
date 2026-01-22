import {Component, HostListener} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

interface navItem{
  label: string;
  link: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule,
    CommonModule,
  ],
  styleUrl: './app-navbar.component.css'
})
export class AppNavbarComponent {
  navItems: navItem[] = [
    { label: 'Home', link: '/home' },
    { label: 'Services', link: '/services' },
    { label: 'About Us', link: '/about' },
    // { label: 'Projects', link: '/projects' },
    { label: 'Contact Us', link: '/contact' },
  ];
  isMobileMenuOpen = false;
  isSearchOpen = false;
  searchQuery = '';
  cartItemsCount = 2;



  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleSearch(): void {
    this.isSearchOpen = !this.isSearchOpen;
    if (this.isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  performSearch(): void {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/search'], { queryParams: { q: this.searchQuery } });
      this.toggleSearch();
    }
  }
}
