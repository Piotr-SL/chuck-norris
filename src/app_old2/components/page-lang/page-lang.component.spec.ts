import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLangComponent } from './page-lang.component';

describe('PageLangComponent', () => {
  let component: PageLangComponent;
  let fixture: ComponentFixture<PageLangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
