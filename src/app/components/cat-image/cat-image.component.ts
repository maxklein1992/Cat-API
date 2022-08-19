import { Component, Input } from '@angular/core';

@Component({
  selector: 'cat-image-app',
  templateUrl: './cat-image.component.html',
  styleUrls: ['./cat-image.component.scss'],
})
export class CatImageComponent {
  @Input() alt: string;
  @Input() src: string;
}
