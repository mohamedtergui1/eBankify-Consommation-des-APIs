import { Component, Input, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface InputData {
    label: string;
    type: string;
    model: any;
}

@Component({
  selector: 'app-modal',
  imports: [Dialog, ButtonModule, InputTextModule , CommonModule , FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})


export class ModalComponent {
    @Input() visible: boolean = true;
    @Input() title: string = 'Default Title';
    @Input() content: string = 'Default Content';
    // @Input() actions: Array<{ label: string, action: () => void }> = [];
    @Input() inputs: Array<InputData> = [];
    // @Input() callback!: () => void;

    constructor() {}

    onModalCallback() {
        
    }
}
