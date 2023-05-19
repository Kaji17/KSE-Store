import { Component, OnInit } from '@angular/core';
import { StoreServiceService } from '../service/store-service.service';
import { IProduct } from '../models/product';
import { Router } from '@angular/router';
import { ProductTestService } from '../service/product-test.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(private servicestore: StoreServiceService,
    private router : Router,
    private servicestoreTest: ProductTestService) { }

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
    console.log(this.servicestoreTest.getProductTest())
    this.products = this.servicestoreTest.getProductTest()
    // this.servicestore.getProduct().subscribe({
    //   next: product => {
    //     this.products = product
    //     console.log('products:',this.products)
    //   }
    // }
    // )
  }

}
