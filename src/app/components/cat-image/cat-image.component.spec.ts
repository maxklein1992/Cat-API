import { TestBed } from '@angular/core/testing';
import { screen } from '@testing-library/angular';

import { CatImageComponent } from './cat-image.component';

describe('CatImageComponent', () => {
  it('should render an image with the correct src and alt attribute', () => {
    const fixture = TestBed.createComponent(CatImageComponent);
    let comp: CatImageComponent = fixture.componentInstance;
    comp.src = 'testsrc';
    comp.alt = 'testalt';
    fixture.detectChanges();

    const image = fixture.debugElement.nativeElement.querySelector('img');

    expect(image['src']).toContain('testsrc');
    expect(image['alt']).toContain('testalt');
  });
});
