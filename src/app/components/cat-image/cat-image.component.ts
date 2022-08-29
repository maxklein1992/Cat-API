import { Component, Input } from '@angular/core';

import type { CatImage } from '../../models';

@Component({
  selector: 'cat-image-app',
  templateUrl: './cat-image.component.html',
  styleUrls: ['./cat-image.component.scss'],
})
export class CatImageComponent {
  @Input() alt: CatImage['id'];
  @Input() src: CatImage['url'];
}
