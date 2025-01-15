import { Component } from '@angular/core';
import { LoanManageService } from '../../services/loan-manage.service';
import { InputData } from '../../../shared/modal/modal.component';
@Component({
  selector: 'app-loan-manage',
  standalone: false,
  templateUrl: './loan-manage.component.html',
  styleUrl: './loan-manage.component.scss'
})
export class LoanManageComponent {
  isModalVisible = false
  constructor(private service: LoanManageService) {}

  ngOnInit(): void {
    
    const observer = {
      next: (response: any) => {
        console.log(response);
        this.myData = response.map( (e:any) => 
        {
          e.user = e.user.name
          return e
        }
        )
      },
      error: (err: any) => {
        console.error('Error occurred:', err);
      },
      complete: () => {
        console.log('Request completed');
      },
    };

    this.service.getAllLoan().subscribe(observer);
  }

  myData = [];

// "id": 1,
//     "principal": 23.0,
//     "interestRate": 32.0,
//     "termMonths": 32,
//     "status": "PENDING",
//     "user": {
//         "id": 1,
//         "name": "mohamed tergui",


  myColumns = [
    { field: 'id', header: 'ID' },
    { field: 'principal', header: 'principal' },
    { field: 'interestRate', header: 'interestRate' },
    { field: 'status', header: 'status' },
    { field: 'user', header: 'user name' }
  ];

  editRow(row: any) {
    console.log('Edit row:', row);
  }

  deleteRow(row: any) {
    console.log('Delete row:', row);
  }

  addRow() {
    console.log('Add row:');
  }

  handleCustomAction(event: any) {
    console.log('Custom action:', event);
  }


  modalInputs: InputData[] = [

    { label: 'Name', type: 'text', model: '', placeholder: 'Enter your name' },
    {
      label: 'Email',
      type: 'email',
      model: '',
      placeholder: 'Enter your email',
    },
    {
      label: 'Password',
      type: 'password',
      model: '',
      placeholder: 'Enter your password',
    },
    { label: 'Role', type: 'text', model: '', placeholder: 'Enter your role' },
    { label: 'Age', type: 'number', model: '', placeholder: 'Enter your age' },
  ];

  modalActions = [
    { label: 'Submit', action: () => this.submitForm() },
    { label: 'Cancel', action: () => this.closeModal() },
  ];

  onModalClosed(isClosed: boolean) {
    this.isModalVisible = isClosed;
  }

  submitForm() {
    console.log('Form submitted:', this.modalInputs);
    this.isModalVisible = false;
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
