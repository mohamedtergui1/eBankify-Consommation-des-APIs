import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Button } from 'primeng/button';
import { ModalComponent, InputData } from '../modal/modal.component';

@Component({
  selector: 'app-table',
  imports: [TableModule, CommonModule, Button],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {

  @Input() name!: string;
  @Input() rows: any[] = [];
  @Input() columns: { field: string; header: string }[] = [];

  @Input() onEdit!: (row: any) => void;
  @Input() onDelete!: (row: any) => void;
  @Input() onAdd!: () => void;

  @Output() customAction = new EventEmitter<any>();

  @Input() modalTitle: string = 'Default Modal Title';
  @Input() modalContent: string = 'Default Modal Content';
  @Input() modalInputs: Array<InputData> = [];
  @Input() modalActions: Array<{ label: string; action: () => void }> = [];

   
  handleEdit(row: any) {
    if (this.onEdit) {
      this.onEdit(row);
    }
  }

  handleDelete(row: any) {
    if (this.onDelete) {
      this.onDelete(row);
    }
  }

  handleAdd() {
    if (this.onAdd) {
      this.onAdd();
    }
  }

  

}
