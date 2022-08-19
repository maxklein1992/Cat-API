import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'toast-app',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  @Input() text: string;

  @Output() closeToast = new EventEmitter<boolean>();

  constructor() {
    this.text = '';
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.closeToast.emit(true);
    }, 5000);
  }
}
