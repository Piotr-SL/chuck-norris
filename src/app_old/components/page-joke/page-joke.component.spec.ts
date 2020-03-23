import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJokeComponent } from './page-joke.component';

describe('PageJokeComponent', () => {
  let component: PageJokeComponent;
  let fixture: ComponentFixture<PageJokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageJokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
