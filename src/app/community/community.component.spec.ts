import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityComponent } from './community.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CommunityComponent', () => {
  let component: CommunityComponent;
  let fixture: ComponentFixture<CommunityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityComponent],
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(CommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
