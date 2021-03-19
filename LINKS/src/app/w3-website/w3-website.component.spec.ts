import { ComponentFixture, TestBed } from '@angular/core/testing';

import { W3WebsiteComponent } from './w3-website.component';

describe('W3WebsiteComponent', () => {
  let component: W3WebsiteComponent;
  let fixture: ComponentFixture<W3WebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ W3WebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(W3WebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
