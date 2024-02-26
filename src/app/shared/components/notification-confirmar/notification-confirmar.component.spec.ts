import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationConfirmarComponent } from './notification-confirmar.component';

describe('NotificationConfirmarComponent', () => {
  let component: NotificationConfirmarComponent;
  let fixture: ComponentFixture<NotificationConfirmarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationConfirmarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationConfirmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
