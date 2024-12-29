import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { ToastComponent } from './shared/toast/toast.component';
import { ProgressComponent } from './shared/progress/progress.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,ToastComponent,ProgressComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'eBankify';
}
