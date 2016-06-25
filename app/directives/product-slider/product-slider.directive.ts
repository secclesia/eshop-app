import {Directive, ElementRef, Input} from 'angular2/core';

declare var jQuery:any;

@Directive({
    selector: '[product-slider]'
})
export class ProductSliderDirective {
    constructor(el: ElementRef) {
      jQuery(el.nativeElement).owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        afterInit: function() {
            jQuery('.product-slider .item').css('visibility', 'visible');
        }
      });
    }
}
