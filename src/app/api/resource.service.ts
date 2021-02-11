import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(public httpApi: HttpClient) {}

  getResourceList() {
    return this.httpApi.get('https://reqres.in/api/unknown').pipe(
      map((response: any) => response?.data)
    );
  }

  getResourceDetail(id: number) {
    return this.httpApi.get(`https://reqres.in/api/unknown/${id}`).pipe(
      map((response: any) => response?.data)
    );
  }
}
