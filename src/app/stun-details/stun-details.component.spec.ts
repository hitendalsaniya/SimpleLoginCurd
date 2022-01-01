import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StunDetailsComponent } from './stun-details.component';

describe('StunDetailsComponent', () => {
  let component: StunDetailsComponent;
  let fixture: ComponentFixture<StunDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StunDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StunDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
