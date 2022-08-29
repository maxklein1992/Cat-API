import { TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  it('should render a title', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    let comp: ButtonComponent = fixture.componentInstance;
    comp.title = 'testtitle';
    comp.disabled = false;
    fixture.detectChanges();

    const button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button.textContent).toContain(comp.title);
  });

  it("prop 'disabled' sets attribute 'disabled'", () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    let comp: ButtonComponent = fixture.componentInstance;
    comp.title = 'testtitle';
    comp.disabled = true;
    fixture.detectChanges();

    const button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button['disabled']).toBe(comp.disabled);
  });

  it("prop 'class' sets attribute 'class'", () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    let comp: ButtonComponent = fixture.componentInstance;
    comp.title = 'testtitle';
    comp.class = 'button--primaryGreen';
    fixture.detectChanges();

    const button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button.classList).toContain(comp.class);
  });
});
