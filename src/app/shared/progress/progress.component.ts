import { Component } from '@angular/core';
import { ProgressService } from '../services/progress.service';
import { CommonModule } from '@angular/common';
import { ProgressSpinner } from 'primeng/progressspinner';

import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-progress',
  imports: [CommonModule,ProgressBarModule,ProgressSpinner ],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss'
})
export class ProgressComponent {
   
  constructor(public progress:ProgressService){
       
  }
  
}
