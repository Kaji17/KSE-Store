import { Component, OnInit } from '@angular/core';
import { StoreServiceService } from '../service/store-service.service';
import { IProduct } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(private servicestore: StoreServiceService,
    private router : Router) { }

  products!: IProduct[]
  ngOnInit(): void {
    this.loadAll()
  }

  onDelete(id:number):void{
    this.servicestore.deleteProduct(id).subscribe((product: IProduct) => {
      console.log("Supprimer", product.marchandiseid)
    })
    this.loadAll()
  }

  loadAll(){
    this.servicestore.getProduct().subscribe({
      next: product => {
        this.products = product
        console.log('products:',this.products)
      }
    }
    )
  }

}
