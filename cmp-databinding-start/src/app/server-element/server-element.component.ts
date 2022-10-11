import { AfterViewChecked, Component, ContentChild, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  // encapsulation:ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit ,AfterViewChecked{
  
 @Input() element: { type: string; name: string; content: string };
 @ViewChild('heading',{static:true}) header:ElementRef;
 @ContentChild('contentParagraph',{static:true}) contentParagraph:ElementRef

  constructor() {}

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('Text content:',this.header.nativeElement.textContent);
    console.log('contentParagraph content:',this.contentParagraph.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log('Text content:',this.header.nativeElement.textContent);
    console.log('ngAfterViewChecked contentParagraph content:',this.contentParagraph.nativeElement.textContent);

  }

}
