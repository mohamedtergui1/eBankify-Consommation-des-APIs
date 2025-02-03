import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../shared/hero-section/hero-section.component';
import { NotAuthLayoutComponent } from '../../shared/not-auth-layout/not-auth-layout.component';
import { TransactionCartComponent } from '../../shared/transaction-cart/transaction-cart.component';

@Component({
  selector: 'app-home',
  imports: [HeroSectionComponent,NotAuthLayoutComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
