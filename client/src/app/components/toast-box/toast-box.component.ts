import { Component, TemplateRef } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-toast-box',
  templateUrl: './toast-box.component.html',
  styleUrls: ['./toast-box.component.css'],
})
export class ToastBoxComponent {
  constructor(public toastService: ToastService) {}

  isTemplate(toast: any) {
    return toast.textOrTpl instanceof TemplateRef;
  }
}
