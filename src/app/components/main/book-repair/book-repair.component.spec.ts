import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRepairComponent } from './book-repair.component';

describe('BookRepairComponent', () => {
  let component: BookRepairComponent;
  let fixture: ComponentFixture<BookRepairComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookRepairComponent]
    });
    fixture = TestBed.createComponent(BookRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
