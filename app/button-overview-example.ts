import {Component} from '@angular/core';

/**
 * @title Basic buttons
 */
@Component({
  selector: 'button-overview-example',
  templateUrl: 'button-overview-example.html',
  styleUrls: ['button-overview-example.css'],
})
export class ButtonOverviewExample {
  delay: any;
  delay2: any;
  load = false;
  load2 = false;

  action() {
    this.load = true;
    if(this.delay) { clearTimeout(this.delay); }
    this.delay = setTimeout(() => this.load = false, 2000);
  }
  action2() {
    this.load2 = true;
    if(this.delay2) { clearTimeout(this.delay2); }
    this.delay2 = setTimeout(() => this.load2 = false, 2000);
  }
}
