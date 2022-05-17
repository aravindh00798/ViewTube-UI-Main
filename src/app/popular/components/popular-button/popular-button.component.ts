import { Component, Input, OnInit } from '@angular/core';
import {  AfterViewInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
import {  filter, map } from 'rxjs/operators';
import { SearchService } from 'src/app/shared/services/search.service';
import { HttpClientModule } from '@angular/common/http';
import { Popular } from 'src/app/shared/models/popular.interface';

@Component({
  selector: 'app-popular-button',
  templateUrl: './popular-button.component.html',
  styleUrls: ['./popular-button.component.css']
})
export class PopularButtonComponent implements AfterViewInit {

  @Input() populars:Popular[];
  @ViewChild('popularbtn') inputElement: ElementRef;
  @Output() click: EventEmitter<string> = new EventEmitter<string>();
  videos: Popular[] = [];


  constructor(private popular:SearchService) {


  }

  ngAfterViewInit() {
    fromEvent(this.inputElement.nativeElement, 'click')
      .pipe(
        map((value) => value),
        filter((value: string) => value.length > 0),
      )
      .subscribe(value => {
        this.click.emit(value);
      });
  }
}
