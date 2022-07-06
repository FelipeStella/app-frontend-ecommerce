import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { IItem } from 'src/app/models/i-item';
import { ItemService } from './../../../services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  product!: IItem
  productForm!: FormGroup
  productId!: number

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _itemService: ItemService,
    private _formBuilder: FormBuilder) {
      this.productForm = this._formBuilder.group({
        id: 0,
        description: ['', Validators.required],
        amount: 0,
        price: 0,
        isUnit: false
      })
     }

  ngOnInit(): void {
    this.getProductActivatedRoute()
    this.getNextId()
    if (!this.product) {

    }
  }

  addItem(item: IItem) {
    this._itemService.addItem(item)
  }

  updateItem(item: IItem) {
    this._itemService.updateItem(item)
  }

  deleteItem(id: number) {
    this._itemService.deleteById(id)
  }

  getNextId() {
    this._itemService.listAllItems().subscribe({
      next: response => {
        this.productId = response.length + 1
      },
      error: err => console.log(err),
      complete: () => {
        this.productForm.get('id')?.patchValue(this.productId)
      }
    })
  }

  getProductActivatedRoute() {
    // this._activatedRoute.paramMap.subscribe(params => {
    //   this.productId =  params.get('id')

    //   if (this.productId) {
    //       this._itemService.getItemById(this.productId).subscribe({
    //         next: response => {
    //           this.productForm.patchValue({
    //             id: response.id,
    //             description: response.description,
    //             amount: response.amount,
    //             price: response.price,
    //             isUnit: response.isUnit
    //           })
    //         },
    //         error: err => console.log(err)
    //       })
    //   }
    //   else {
    //     this.productForm = this._formBuilder.group()
    //   }
    // })
    this._itemService.getItemById(+this._activatedRoute.snapshot.params['id']).subscribe({
      next: response => {
        this.product = response
      },
      error: err => console.log('Error: ', err)
    });
  }

}
