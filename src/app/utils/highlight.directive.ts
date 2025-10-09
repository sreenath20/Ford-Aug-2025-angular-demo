import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) { }

  @HostListener('mouseover')
  onMouseEnter(){
    console.log("mouse enter");
    this.highlight('blue');
  }
  @HostListener('mouseout')
  onMouseLeave(){
      console.log("mouse Leave");
    this.highlight('');
  }
  
  private highlight(color:string){
    console.log(color);
    this.el.nativeElement.style.backgroundColor = color;
  }

}
