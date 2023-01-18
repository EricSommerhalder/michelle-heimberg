import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private language = "de";
  constructor() { }
  getLanguage() {
    return this.language;
  }
  setLanguage(language: string) {
    this.language = language;
  }
}
