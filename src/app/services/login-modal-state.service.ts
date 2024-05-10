import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginModalStateService {

  private displayLoginModal = new BehaviorSubject<boolean>(false);

  displayLoginModal$ = this.displayLoginModal.asObservable();

  constructor() { }

  openLoginModal() {
    this.displayLoginModal.next(true);
  }

  closeLoginModal() {
    this.displayLoginModal.next(false);
  }

}
