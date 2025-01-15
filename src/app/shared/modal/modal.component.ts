import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface InputData {
    label: string;
    type: string;
    model: any;
    placeholder?: string;
}

@Component({
  selector: 'app-modal',
  imports: [Dialog, ButtonModule, InputTextModule, CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

    @Input() visible: boolean = true;
    @Input() title: string = 'Default Title';
    @Input() content: string = 'Default Content';
    @Input() inputs: Array<InputData> = []; 
    @Input() actions: Array<{ label: string, action: () => void }> = [];   

    @Output() modalClosed: EventEmitter<boolean> = new EventEmitter<boolean>(); 

    constructor() {}

    onActionButtonClick(action: () => void) {
        action();
        this.modalClosed.emit(false);  
    }
 
    closeModal() {
        this.modalClosed.emit(false);
    }

}
