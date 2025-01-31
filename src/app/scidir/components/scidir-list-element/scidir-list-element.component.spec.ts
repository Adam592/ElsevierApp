import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScidirListElementComponent } from './scidir-list-element.component';

describe('ScidirListElementComponent', () => {
  let component: ScidirListElementComponent;
  let fixture: ComponentFixture<ScidirListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScidirListElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScidirListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
