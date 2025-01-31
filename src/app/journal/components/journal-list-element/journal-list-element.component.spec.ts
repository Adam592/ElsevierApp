import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalListElementComponent } from './journal-list-element.component';

describe('JournalListElementComponent', () => {
  let component: JournalListElementComponent;
  let fixture: ComponentFixture<JournalListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JournalListElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
