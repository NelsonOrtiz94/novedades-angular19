import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementalHidrationComponent } from './incremental-hidration.component';

describe('IncrementalHidrationComponent', () => {
  let component: IncrementalHidrationComponent;
  let fixture: ComponentFixture<IncrementalHidrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncrementalHidrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncrementalHidrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
