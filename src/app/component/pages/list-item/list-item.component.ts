import { ItemService } from './../../../services/item.service';
import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/app/models/i-item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  listItems!: IItem[]
  filtredProducts!: IItem[]
  filterBy!: string
  displayedColumns: string[] = ['Code', 'Description', 'Amount', 'Price', 'Option'];

  constructor(private _itemService: ItemService) { }

  ngOnInit(): void {
    this.listAllItems()
  }

  listAllItems() {
    this._itemService.listAllItems().subscribe({
      next: response => {
        this.listItems = response

        this.listItems = this.listItems.map(p => {
          //p.mediaUnity = ProductMediaUnit.ESPETO.toString() ? p.mediaUnity = ProductMediaUnit.ESPETO : p.mediaUnity = ProductMediaUnit.UNIDADE
          return p
        })
        this.filtredProducts = this.listItems
      },
      error: err => {
        console.log('Error: ', err)
      }
    })
  }

  set filter(value: string) {
    this.filterBy = value;

    this.filtredProducts = this.listItems.filter((x: IItem) =>
      x.description.toLowerCase().indexOf(this.filterBy.toLocaleLowerCase()) > -1);
  }

  get filter() {
    return this.filterBy
  }

}
