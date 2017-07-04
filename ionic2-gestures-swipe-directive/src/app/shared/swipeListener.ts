import {Directive, Output,ElementRef, OnInit, OnDestroy,EventEmitter} from '@angular/core';
import {Gesture} from 'ionic-angular/gestures/gesture';
declare var Hammer: any;

@Directive({
    selector: '[swipe-listener]'
})
export class SwipeListener implements OnInit, OnDestroy {
   @Output() onSwipeUp = new EventEmitter();
   @Output() onSwipeDown = new EventEmitter();
   @Output() onSwipeLeft = new EventEmitter();
   @Output() onSwipeRight = new EventEmitter();

    private el: HTMLElement;
    private swipeGesture: Gesture;

    constructor(el: ElementRef) {
        this.el = el.nativeElement;
    }

    ngOnInit() {
        this.swipeGesture = new Gesture(this.el, {
            recognizers: [
                [Hammer.Swipe, {direction: Hammer.DIRECTION_ALL}]
            ]
        });
        this.swipeGesture.listen();
        this.swipeGesture.on('swipeup', e => {
            this.onSwipeUp.emit({ el: this.el });
        });
        this.swipeGesture.on('swipedown', e => {
            this.onSwipeDown.emit({ el: this.el });
        });
        this.swipeGesture.on('swiperight', e => {
            this.onSwipeRight.emit({ el: this.el });
        });
        this.swipeGesture.on('swipeleft', e => {
            this.onSwipeLeft.emit({ el: this.el });
        });

    }

    ngOnDestroy() {
        this.swipeGesture.destroy();
    }
}