import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
 
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  imports:[
    CommonModule
    ,
    RouterModule
  ]
})

export class SideBarComponent {

  menuItems = [{
    label: 'Users Management',
    route: '/dashboard',
    icon: 'pi pi-fw pi-users',
    badge: null
  },
  {
    label: 'Accounts Management',
    route: '/dashboard/accounts',
    icon: 'pi pi-fw pi-user',
    badge: null
  },
  {
    label: 'Transactions Management',
    route: '/dashboard/transactions',
    icon: 'pi pi-fw pi-exchange',
    badge: null
  },
  {
    label: 'Loans Management',
    route: '/dashboard/loans',
    icon: 'pi pi-fw pi-money-bill',
    badge: null
  },
  {
    label: 'Profile',
    route: '/profile',
    icon: 'pi pi-fw pi-user',
    badge: null
  },
  {
    label: 'Settings',
    route: '/settings',
    icon: 'pi pi-fw pi-cog',
    badge: null
  },
  {
    label: 'Messages',
    route: '/messages',
    icon: 'pi pi-fw pi-envelope',
    badge: '5'
  },
  {
    label: 'Help',
    route: '/help',
    icon: 'pi pi-fw pi-question',
    badge: null
  }]
 
}