import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule
  ],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss'
})
export class LoginModalComponent {

  isVisible = false; // Controls visibility

  constructor() {}

  open() {
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }

}
