import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { AuthorModel } from '../shared/models/authors.model';
import { NestedChildComponent } from '../nested-child/nested-child.component';

@Component({
  selector: 'lch-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {
  @Input() parentData: number | undefined;
  @Input() pData_2: boolean | undefined;
  classVariable = 'abc';
  classVariable_2: string | undefined;
  @Input() authors: AuthorModel | undefined;
  @ContentChild(NestedChildComponent) nestedChild: NestedChildComponent | undefined;
  childCounter = 0;

  /** It has initialized all the class member
   *  It will call only once in the component lifecycle
   *  It is the best place to initialized all the field of the component even input properties as well
   *  Don't perform any kind of operation over here, that is depend on input properties which will get ni
   *  initialized after the constructor
   *  On the page load you need to make a call to your API then, this is the best place
  */
  constructor() {
    // this.parentData = 0;
    console.log('child - constructor', '@input - ' + this.parentData, this.classVariable, this.classVariable_2);
  }

  /* Purpose of the ngOnChanges - whenever any changes occur in the input property of the parent component, everytime ngOnChange will get called..
   * If you need to change some logic on the change of your input property, then, ngOnChange will be the best method..
   * ngOnChange will get called everytime when there is change in the input property .
   * try to avoid this in the complex logic as it will called multiple times if you run your complex logic then your application will slow.
   * ngOnChanges will not detected if you're making any changes in the existing reference of the object. (obj.id = 2).
   * it will simply compare the reference and values if the reference of the object is same from the parent to child, ngOnChanges not display its value.
   * if you changing the reference like check in parent component
   *
   */
  ngOnChanges(changes: SimpleChanges): void {
    /* changes - {
        "parentData":{"previousValue":0,"currentValue":1,"firstChange":false},
        "pData_2":{"previousValue":false,"currentValue":true,"firstChange":false}
    } */

    console.log('child - ngOnChanges', '@input - ' + this.parentData, changes);

  }
  /* Whenever we are using the selector of the particular component and the page is getting rendered on the browser
  at the time, angular creates the instance of that new component */


  /* It will called once the angular has initialized all the input properties but before displaying them on the UI..
   * it means after initialized these data-bound(@Input) properties but before displaying them on the UI, in the middle of this process,
   * ngOnInit will get called.
   * it will get called "only once" in the lifecycle of the component
  */
  ngOnInit(): void {
    console.log('child - ngOnInit', '@input - ' + this.parentData);
  }


  /** It will detect if you make any changes in object reference in the parent component like this.obj.id = this.count;
   *  we will get updated values from object property everytime.
   *  Remember don't use both (ngOnChanges, ngDoCheck) of them at once in your application as because both will call same time
  */
  ngDoCheck(): void {
    console.log('child - ngDoCheck', '@authors - ' + JSON.stringify(this.authors) + this.nestedChild?.parentData);
  }

  /** we can see the ng-content data with this
   * it will get called once content projected in the parent component
   */
  ngAfterContentInit(): void {
    console.log('child - ngAfterContentInit', ' - ' + this.nestedChild?.parentData);
  }

  /**
   * It will call everytime when content projected and updated in parent component template
   */

  ngAfterContentChecked(): void {
    console.log('child - ngAfterContentChecked', ' - ' + this.nestedChild?.parentData);
  }


  OnCounter() {
    this.childCounter++;
  }
}

