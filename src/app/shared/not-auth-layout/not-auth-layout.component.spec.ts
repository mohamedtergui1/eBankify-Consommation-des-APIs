import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAuthLayoutComponent } from './not-auth-layout.component';

describe('NotAuthLayoutComponent', () => {
  let component: NotAuthLayoutComponent;
  let fixture: ComponentFixture<NotAuthLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotAuthLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotAuthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
