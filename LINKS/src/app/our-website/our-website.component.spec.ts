import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWebsiteComponent } from './our-website.component';

describe('OurWebsiteComponent', () => {
  let component: OurWebsiteComponent;
  let fixture: ComponentFixture<OurWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurWebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
