import { AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { AuthorModel } from '../shared/models/authors.model';
import { ChildComponent } from '../child/child.component';

@Component({
    selector: 'lch-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges, AfterViewInit, AfterViewChecked, OnDestroy {
    @ViewChild('btnCounter')  btnCounter!: ElementRef;
    @ViewChild(ChildComponent) child: ChildComponent | undefined;
    count = 0;
    testFlag = false;
    @Input() test = '';
    obj: AuthorModel = { id: 1, name: 'ranjith' };
    forNestedChild = 'this is getting from Parent Component'
    private time: any;

    // Angular life cycle hooks mainly focusing on child componet hooks

    constructor() {
        console.log('Parent - constructor', this.testFlag);
    }


    /** It will not invoked at all as it doesn't have parent @input properties here, that's why
      * ngOnChanges will not detected if you're making any changes in the existing reference of the object. (obj.id = 2).
      * it will simply compare the reference and values if the reference of the object is same from the parent to child, ngOnChanges not display its value.
      * if you changing the reference like this.obj = { id: this.count, name: 'Ranjith Kumar' }
    */
    ngOnChanges(changes: SimpleChanges): void {
        console.log('Parent - ngOnChanges', changes);
    }

    ngOnInit(): void {
        console.log('Parent - ngOnInit', this.testFlag);
        console.log(this.btnCounter); // we will get undefined as element reference not initialized over here
        // this.timer();
    }

    counter() {
        this.count++;
        this.testFlag = !this.testFlag;
        this.obj.id = this.count; // it will not detected by ngOnChanges in child component, so check with ngDoCheck in child component
        // this.obj = { id: this.count, name: 'Ranjith Kumar' } // reference is different this time, so it will detected by ngOnChanges

        this.forNestedChild += this.count;
    }

    /** this method will get called only one after view initialized - look at btnCounter
     * it is for html ElementRef
     *
    */
    ngAfterViewInit(): void {
        console.log('Parent - ngAfterViewInit', this.btnCounter);
        this.btnCounter.nativeElement.innerHTML = 'Button text Changed!';
    }

    ngAfterViewChecked(): void {
        console.log('Parent - ngAfterViewChecked', this.child?.childCounter);
    }

    timer() {
        this.time = setInterval(() => {
            this.count++;
        }, 1000)
    }

    /**
     * Firstly, child component will get destroyed then, parent component
     */
    ngOnDestroy(): void {
        console.log('Parent Component detroy');
        clearInterval(this.time);

    }



}
