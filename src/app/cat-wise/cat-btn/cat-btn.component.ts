import { Component, Input, OnInit } from '@angular/core';
import {  AfterViewInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
import {  filter, map } from 'rxjs/operators';
import { SearchService } from 'src/app/shared/services/search.service';
import { HttpClientModule } from '@angular/common/http';
import { CatDisplay } from 'src/app/shared/models/cat-display.interface';

@Component({
  selector: 'app-cat-btn',
  templateUrl: './cat-btn.component.html',
  styleUrls: ['./cat-btn.component.css']
})
export class CatBtnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
