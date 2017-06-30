import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAdditionformComponent } from './products-additionform.component';

describe('ProductsAdditionformComponent', () => {
  let component: ProductsAdditionformComponent;
  let fixture: ComponentFixture<ProductsAdditionformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsAdditionformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsAdditionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
