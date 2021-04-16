import { Directive, ElementRef, Input, ComponentFactoryResolver, ViewContainerRef, Renderer2 } from '@angular/core';
import { MatButton, MatProgressBar, ThemePalette } from '@angular/material';

@Directive({
  selector: '[appButtonLoader2]'
})
export class ButtonLoader2Directive {
  progressElement: any;

  @Input() set appButtonLoader2(value: boolean) {
    this.toggle(value);
  }

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver, 
    private viewContainerRef: ViewContainerRef, 
    private matButton: MatButton, 
    private renderer: Renderer2, 
    private elementRef: ElementRef) {
    this.loadComponent();
  }

  loadComponent() {
    this.viewContainerRef.clear();
    
    // Get factory
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(MatProgressBar);
    
    // Create component
    const matProgress = this.viewContainerRef.createComponent(componentFactory, 2);
    matProgress.instance.mode = 'indeterminate';
    
    // Move it
    this.progressElement = matProgress.injector.get(MatProgressBar)._elementRef.nativeElement
    this.renderer.appendChild(this.elementRef.nativeElement, this.progressElement);

    // Add custom class
    this.elementRef.nativeElement.classList.add('mat-load-button');
  }

  toggle(condition: boolean) {
    condition ? this.show() : this.hide()
  }

  show() {
    this.progressElement.style.opacity = '0.7';
    this.matButton.disabled = true;
  }

  hide() {
    this.progressElement.style.opacity = '0';
    this.matButton.disabled = false;
  }

}