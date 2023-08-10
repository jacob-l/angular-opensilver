import { Component } from '@angular/core';
import { OpensilverService } from './services/opensilver.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-hello-world';

  constructor(private opensilverService: OpensilverService) { }

  public isOpenSilverVisible(): boolean {
    return this.opensilverService.openSilverVisibility;
  }
}
