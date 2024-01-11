import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachProductComponent } from './each-product.component';

describe('EachProductComponent', () => {
  let component: EachProductComponent;
  let fixture: ComponentFixture<EachProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EachProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EachProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
