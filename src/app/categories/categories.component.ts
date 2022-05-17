import { Component, Input, OnInit } from '@angular/core';
import {   ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { SearchService } from 'src/app/shared/services/search.service';
import { AppComponent } from '../app.component';
import { Categories } from '../shared/models/categories.interface';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent  {
  public newVal:any=null
  public val:any;
  cat:Categories[];
  @ViewChild('mySelect') inputElement: ElementRef;

  @Output() click: EventEmitter<string> = new EventEmitter<string>();
  public check:boolean;

  constructor(private searchService: SearchService) {
    this.val=this.searchService.data;

   }

  ngOnInit()
  {
    this.handleSearch();

  }

  public onChange(event): any
  {

    this.newVal = event.target.value;

    this.searchService.setTest(this.newVal);
    console.log(this.newVal);
    return (this.newVal);


  }

  public getTwo()
  {
    this.searchService.getOne(this.newVal).subscribe(data=>{
    console.log(data);

})

  }



  handleSearch() {
    this.searchService.getCategories()
      .subscribe((items: any) => {
        this.cat = items.map(item => {

          return( {
            title: item.snippet.title,
            id :item.id,
            assignable:item.snippet.assignable,
          });

        });
  });





}}
