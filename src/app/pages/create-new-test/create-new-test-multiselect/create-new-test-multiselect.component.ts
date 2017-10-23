import { HostListener, Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'pt-create-new-test-multiselect',
  templateUrl: './create-new-test-multiselect.component.html',
  styleUrls: ['./create-new-test-multiselect.component.scss']
})

export class CreateNewTestMultiselectComponent implements OnInit {
  @Input() selectContent: any;
  mulsel = true;
  mulselContent = false;
  currentInner: any;
  currentClass: string;

  mulselOpen() {
    this.mulselContent = !this.mulselContent;
  }

  @Output() currentType: EventEmitter<any> = new EventEmitter();

  click(value, icon, select, $event: Event) {
    this.currentInner = value;
    this.currentClass = icon;
    this.currentType.emit(value);
    this.mulselOpen();
  }

  clickedInside($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
  }

  @HostListener('document:click', ['$event']) clickedOutside($event) {
    if (this.mulselContent) {
      this.mulselContent = false;
    }
  }


  constructor() {
  }

  ngOnInit() {
  }
}
