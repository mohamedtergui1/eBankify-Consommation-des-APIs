import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private loaderSubject = new BehaviorSubject<boolean>(false);
  private progressSubject = new BehaviorSubject<number>(0);
  
  loader$ = this.loaderSubject.asObservable();
  progress$ = this.progressSubject.asObservable();

  start() {
    this.loaderSubject.next(true);
    this.progressSubject.next(0);
  }

  updateProgress(value: number) {
    this.progressSubject.next(value);
  }

  stop() {
    this.loaderSubject.next(false);
    this.progressSubject.next(100);
  }
}