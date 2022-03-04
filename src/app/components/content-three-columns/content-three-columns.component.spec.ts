import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentThreeColumnsComponent } from './content-three-columns.component';

describe('ContentThreeColumnsComponent', () => {
  let component: ContentThreeColumnsComponent;
  let fixture: ComponentFixture<ContentThreeColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentThreeColumnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentThreeColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
