import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollServiceService {
  elementId: string;

  setElementId(id: string) {
    this.elementId = id;
  }
  constructor() { }
}
