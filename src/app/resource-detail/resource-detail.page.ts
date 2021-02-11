import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'src/app/api/resource.service';

@Component({
  selector: 'app-resource-detail',
  templateUrl: './resource-detail.page.html',
  styleUrls: ['./resource-detail.page.scss'],
})
export class ResourceDetailPage implements OnInit {

  public resourceId: number;
  public resourceDetail$;

  constructor(
    public resourceService: ResourceService
  ) { }

  ngOnInit() {
    this.resourceId = Number(sessionStorage.getItem('resourceId'));
    this.resourceDetail$ = this.resourceService.getResourceDetail(this.resourceId);
  }

}
