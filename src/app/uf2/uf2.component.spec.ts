import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UF2Component } from './uf2.component';

describe('UF2Component', () => {
  let component: UF2Component;
  let fixture: ComponentFixture<UF2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UF2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UF2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
