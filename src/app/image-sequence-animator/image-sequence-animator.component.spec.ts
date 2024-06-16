import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSequenceAnimatorComponent } from './image-sequence-animator.component';

describe('ImageSequenceAnimatorComponent', () => {
  let component: ImageSequenceAnimatorComponent;
  let fixture: ComponentFixture<ImageSequenceAnimatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageSequenceAnimatorComponent]
    });
    fixture = TestBed.createComponent(ImageSequenceAnimatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
