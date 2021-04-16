import { Directive, ElementRef, Input } from '@angular/core';
import { MatButton } from '@angular/material';

@Directive({
  selector: '[appButtonLoader]'
})
export class ButtonLoaderDirective {
  img: HTMLImageElement;
  savedText: string;

  @Input() loadText?: string;
  @Input() set appButtonLoader(value: boolean) {
    this.toggle(value);
  }

  constructor(private element:ElementRef, private matButton: MatButton) {
    this.img = document.createElement('img');
    this.img.src = 'https://www.motosha.com/wp-content/uploads/2018/03/motosha-spinner.gif';
    this.toggle(this.appButtonLoader);
  }

  toggle(condition: boolean) {
    condition ? this.show() : this.hide()
  }

  show() {
    if(this.loadText) {
      this.savedText = this.element.nativeElement.innerHTML;
      this.element.nativeElement.innerHTML = this.loadText;
    }

    this.element.nativeElement.appendChild(this.img);
    this.matButton.disabled = true;
  }

  hide() {
    this.img.remove();
    this.matButton.disabled = false;

    if(this.savedText) {
      this.element.nativeElement.innerHTML = this.savedText;
    }

  }

}