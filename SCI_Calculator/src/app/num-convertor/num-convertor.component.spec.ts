import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumConvertorComponent } from './num-convertor.component';

describe('NumConvertorComponent', () => {
  let component: NumConvertorComponent;
  let fixture: ComponentFixture<NumConvertorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumConvertorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumConvertorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
