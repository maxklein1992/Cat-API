import { screen } from '@testing-library/angular';
import { TestBed } from '@angular/core/testing';

import { ToastComponent } from './toast.component';

describe('ToastComponent', () => {
  it('should render toast message', () => {
    const fixture = TestBed.createComponent(ToastComponent);
    let comp: ToastComponent = fixture.componentInstance;
    comp.text = 'test toast';
    fixture.detectChanges();

    const toast = screen.findByText(comp.text);
    expect(toast).toBeTruthy();
  });
});
