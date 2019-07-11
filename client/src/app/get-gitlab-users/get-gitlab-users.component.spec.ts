import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetGitlabUsersComponent } from './get-gitlab-users.component';

describe('GetGitlabUsersComponent', () => {
  let component: GetGitlabUsersComponent;
  let fixture: ComponentFixture<GetGitlabUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetGitlabUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetGitlabUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
