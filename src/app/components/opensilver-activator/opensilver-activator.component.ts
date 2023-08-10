import { Component, OnDestroy, OnInit } from '@angular/core';
import { OpensilverService } from '../../services/opensilver.service';

@Component({
  selector: 'app-opensilver-activator',
  templateUrl: './opensilver-activator.component.html',
  styleUrls: ['./opensilver-activator.component.scss']
})
export class OpensilverActivatorComponent implements OnInit, OnDestroy {

  constructor(private opensilverService: OpensilverService) {
    this.opensilverService.setOpenSilverVisibility(true);
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.opensilverService.setOpenSilverVisibility(false);
  }
}
