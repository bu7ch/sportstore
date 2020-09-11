import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';
import { OrderRepository } from './order.repository';
import { Order } from './order.model';
import { HttpClientModule } from '@angular/common/http';
import { RestDataSource } from './rest.datasource';
@NgModule({
  providers: [
    ProductRepository,
    StaticDataSource,
    Cart,
    OrderRepository,
    Order,
    { provide: StaticDataSource, useClass: RestDataSource },
  ],
  imports: [HttpClientModule],
})
export class ModelModule {}
