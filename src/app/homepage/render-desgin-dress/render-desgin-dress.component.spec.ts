import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderDesginDressComponent } from './render-desgin-dress.component';

describe('RenderDesginDressComponent', () => {
  let component: RenderDesginDressComponent;
  let fixture: ComponentFixture<RenderDesginDressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderDesginDressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderDesginDressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
