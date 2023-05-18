import { Component, OnInit } from '@angular/core';
import { IProduct, Product } from '../models/product';
import { StoreServiceService } from '../service/store-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-store',
  templateUrl: './update-store.component.html',
  styleUrls: ['./update-store.component.scss']
})
export class UpdateStoreComponent implements OnInit {

  id1!: number
  product: IProduct = new Product()
  constructor(private storeService: StoreServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.id1 = id
    console.log(this.id1)
  }

  onsubmit(value: IProduct): void {
    // this.login(value)
    this.loadAll()
  }

  onUpdate(value: IProduct){
    
    this.storeService.upDateProduct(this.id1, value).subscribe({
      next: product =>{
        console.log('produit modifier:', product)
        this.loadAll()
      }
    })
  }

  loadAll(){
    this.storeService.getProduct()
  }

}
