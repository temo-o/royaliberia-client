import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-sequence-animator',
  templateUrl: './image-sequence-animator.component.html',
  styleUrls: ['./image-sequence-animator.component.css']
})
export class ImageSequenceAnimatorComponent implements OnInit {
  @Input() personId: number = 0;
  @Input() imageSequenceCount: number = 0;
  currentImageIndex: number = 1;
  intervalId: any;
  imgSrc: string = "";
  direction: number = 1;

  constructor() {}

  ngOnInit(): void {
    if (this.personId > 0 && this.imageSequenceCount > 0) {
      this.updateImageSrc();
    }
    else{
      this.setPlaceholderImage();
    }
  }

  onMouseEnter(): void {
    console.log(this.currentImageIndex);
    console.log(this.imageSequenceCount);
    if(this.currentImageIndex === this.imageSequenceCount && this.imageSequenceCount > 0){
      this.direction = 1;
      this.currentImageIndex = 0;
      this.startAnimation();
    }
    else if (this.imageSequenceCount >= 1) {
      this.direction = 1;
      this.startAnimation();
    }
    else if(this.currentImageIndex === 0){
      this.direction = 1;
      this.startAnimation();
    }
  }

  onMouseLeave(): void {
    if (this.imageSequenceCount > 1) {
      this.direction = -1;
    }

    this.stopAnimation();
  }

  private startAnimation(): void {
    // this.stopAnimation();
    this.intervalId = setInterval(() => {
      this.currentImageIndex += this.direction;
      if (this.currentImageIndex >= this.imageSequenceCount || this.currentImageIndex < 1) {
        this.direction = -this.direction; // Reverse the direction
        this.currentImageIndex = Math.max(1, Math.min(this.currentImageIndex, this.imageSequenceCount));
        console.log('Stopping Animation');
        this.stopAnimation();
      }
      this.updateImageSrc();
    }, 160);
}

  private stopAnimation(): void {
    clearInterval(this.intervalId);
  }

  private updateImageSrc(): void {
    console.log('updating image src');
    this.imgSrc = `/assets/images/person/${this.personId}/${this.personId}-${this.currentImageIndex}.jpg`;
  }

  private setPlaceholderImage(imageSrc = `/assets/images/person/placeholder.png`): void{
    this.imgSrc = imageSrc;
  }
}
