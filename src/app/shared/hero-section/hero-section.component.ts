import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  @Input() title: string = 'Banking made simple and secure';
  @Input() subtitle: string = 'Experience the future of banking with eBankify. Manage your finances, make transactions, and grow your wealth—all from the comfort of your home.';

  onGetStarted() {
    // Implement navigation to sign-up page
    console.log('Navigating to sign-up page');
  }

  onLogin() {
    // Implement navigation to login page
    console.log('Navigating to login page');
  }
}
