import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionManageComponent } from './transaction-manage.component';

describe('TransactionManageComponent', () => {
  let component: TransactionManageComponent;
  let fixture: ComponentFixture<TransactionManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionManageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
