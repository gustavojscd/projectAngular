import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit{
  product: Product = {
    name: '',
    price: null
  }

  constructor (
    private productService: ProductService, 
    private router: Router,
    private route: ActivatedRoute,
    ){
    }

  ngOnInit (): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readByID(id).subscribe(product => {
      this.product = product});
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("produto atualizado com sucesso!");
      this.router.navigate(['/products']);
    })
  }

  cancel(){
    this.router.navigate(['/products']);
  }
}
