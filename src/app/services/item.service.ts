import { Injectable } from '@angular/core';
import { IItem } from '../models/i-item';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private baseUrl: string = 'http://localhost:3100/api/products'

  constructor(private _httpClient: HttpClient) {}

  addItem(item: IItem): Observable<IItem> {
    return this._httpClient.post<IItem>(`${this.baseUrl}`, item)
  }

  updateItem(item: IItem): Observable<IItem> {
    return this._httpClient.put<IItem>(`${this.baseUrl}/${item.id}`, item)
  }

  deleteById(id: number): Observable<any> {
    return this._httpClient.delete<any>(`${this.baseUrl}/${id}`)
  }

  listAllItems(): Observable<IItem[]> {
    return this._httpClient.get<IItem[]>(this.baseUrl)
  }

  getItemById(id: number): Observable<IItem> {
    return this._httpClient.get<IItem>(`${this.baseUrl}/${id}`)
  }

}
