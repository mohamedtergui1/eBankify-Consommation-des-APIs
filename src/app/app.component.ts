import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastComponent } from './shared/toast/toast.component';
import { ProgressComponent } from './shared/progress/progress.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ToastComponent,ProgressComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'eBankify';
}
