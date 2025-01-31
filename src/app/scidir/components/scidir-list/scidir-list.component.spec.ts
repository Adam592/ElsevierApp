import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScidirListComponent } from './scidir-list.component';

describe('ScidirListComponent', () => {
  let component: ScidirListComponent;
  let fixture: ComponentFixture<ScidirListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScidirListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScidirListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
