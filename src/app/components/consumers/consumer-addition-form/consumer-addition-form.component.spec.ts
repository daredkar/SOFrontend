import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerAdditionFormComponent } from './consumer-addition-form.component';

describe('ConsumerAdditionFormComponent', () => {
  let component: ConsumerAdditionFormComponent;
  let fixture: ComponentFixture<ConsumerAdditionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerAdditionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerAdditionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
