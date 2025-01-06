import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { AuthUserServiceService } from '../services/auth-user-service.service';
import { routes } from '../../app.routes';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [Menubar, BadgeModule, AvatarModule, InputTextModule, Ripple, CommonModule, RouterModule],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    items: MenuItem[] | undefined;
    isAuthenticated: boolean = false;
    constructor(private authUserService: AuthUserServiceService, private router: Router){
    }   
    ngOnInit() {
        this.updateMenuItems();

        this.authUserService.authStatusListener.subscribe(() => {
            this.updateMenuItems();
        });
    }

    private updateMenuItems() {
        this.isAuthenticated = this.authUserService.iSauthenticated();

        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home',
            },
            {
                label: 'Projects',
                icon: 'pi pi-search',
                badge: '3',
                items: [
                    {
                        label: 'Core',
                        icon: 'pi pi-bolt',
                        shortcut: '⌘+S',
                    },
                    {
                        label: 'Blocks',
                        icon: 'pi pi-server',
                        shortcut: '⌘+B',
                    },
                    {
                        separator: true,
                    },
                    {
                        label: 'UI Kit',
                        icon: 'pi pi-pencil',
                        shortcut: '⌘+U',
                    },
                ],
            },
            ...(!this.isAuthenticated ? [
                { label: 'Login', routerLink: '/auth' },
                { label: 'Sign Up', routerLink: '/auth/signup' }
            ] : []),
            ...(this.isAuthenticated ? [
                { label: 'Profile', routerLink: '/profile' },
                { label: 'LogOut', routerLink: '/', command: () => this.logout() }
            ] : [])
        ];
    }

    logout(){
        localStorage.clear()
        this.authUserService.setToken(null)
        this.router.navigate(['/auth']);
    }
}
