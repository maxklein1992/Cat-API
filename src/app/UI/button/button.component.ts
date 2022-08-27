import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'button-app',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Output() onClick: EventEmitter<ButtonComponent> = new EventEmitter(false);
  @Input() title: string;
  @Input() class: string;
  @Input() disabled: boolean;
}
