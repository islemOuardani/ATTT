import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtttComponent } from './attt.component';

describe('AtttComponent', () => {
  let component: AtttComponent;
  let fixture: ComponentFixture<AtttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtttComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
