import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientGradeComponent } from './client-grade.component';

describe('ClientGradeComponent', () => {
  let component: ClientGradeComponent;
  let fixture: ComponentFixture<ClientGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientGradeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
