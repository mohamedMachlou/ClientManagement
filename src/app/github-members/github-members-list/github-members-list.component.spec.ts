import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubMembersListComponent } from './github-members-list.component';

describe('GithubMembersListComponent', () => {
  let component: GithubMembersListComponent;
  let fixture: ComponentFixture<GithubMembersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GithubMembersListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GithubMembersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
