import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesFormComponent } from './quote-form.component';

describe('QuoteFormComponent', () => {
  let component:QuotesFormComponent;
  let fixture: ComponentFixture<QuotesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});