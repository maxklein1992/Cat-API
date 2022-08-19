import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'button-app',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Output() clicked: EventEmitter<any> = new EventEmitter<any>();
  @Input() title: string;
  @Input() class: any;
  @Input() disabled: boolean;
}
