import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CromeComponent } from './crome.component';

describe('CromeComponent', () => {
  let component: CromeComponent;
  let fixture: ComponentFixture<CromeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CromeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
