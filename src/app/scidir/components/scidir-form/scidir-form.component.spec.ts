import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScidirFormComponent } from './scidir-form.component';

describe('ScidirFormComponent', () => {
  let component: ScidirFormComponent;
  let fixture: ComponentFixture<ScidirFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScidirFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScidirFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
