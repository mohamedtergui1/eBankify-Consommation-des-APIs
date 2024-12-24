import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';  // Import FormsModule for ngModel support
import Aura from '@primeng/themes/aura';
import { InputOtpModule } from 'primeng/inputotp'; 
export const appConfig: ApplicationConfig = {
  providers: [
    // Zone change detection configuration to coalesce events for improved performance
    provideZoneChangeDetection({ eventCoalescing: true }),

    // Router provider for handling routing with the routes defined in 'app.routes'
    provideRouter(routes),

    // Client-side hydration, useful for SSR with event replay to ensure state is rehydrated
    provideClientHydration(withEventReplay()),

    // Asynchronous animations support
    provideAnimationsAsync(),

    // PrimeNG configuration for setting up theme and options 
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),

    // Provide FormsModule for ngModel to work
    FormsModule
    ,
    ReactiveFormsModule
    ,
    InputOtpModule
  ]
};
