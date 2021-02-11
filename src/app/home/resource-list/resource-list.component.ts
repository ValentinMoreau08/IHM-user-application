import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss'],
})
export class ResourceListComponent implements OnInit {

  @Input()
  resourceList;

  @Output()
  selectedResource = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

  selectResource(id: number) {
    this.selectedResource.emit(id);
  }

}
