import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesDetalisComponent } from './recipes-detalis.component';

describe('RecipesDetalisComponent', () => {
  let component: RecipesDetalisComponent;
  let fixture: ComponentFixture<RecipesDetalisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesDetalisComponent]
    });
    fixture = TestBed.createComponent(RecipesDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
