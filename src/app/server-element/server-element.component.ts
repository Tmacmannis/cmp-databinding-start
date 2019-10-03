import { Component, OnInit, Input, ViewEncapsulation, OnChanges, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: {type: string, name: string, content: string};

  @ViewChild('heading', {static: true}) header: ElementRef;
  constructor() { 
    console.log('Constructor called');
  }

  ngOnChanges(){
    console.log('ngOnChanges called');
    console.log(this.header.nativeElement.textContent);
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngDoCheck(){
    console.log('ngDoCheck called');
  }

}
