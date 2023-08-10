import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpensilverService {
  openSilverVisibility = false;

  constructor() {
    console.log('OPENSILVER SERVICE CONSTRUCTOR');
  }

  public setOpenSilverVisibility(isVisible: boolean): void {
    this.openSilverVisibility = isVisible;
  }
}
