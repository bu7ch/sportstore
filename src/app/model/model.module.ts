import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';
import { OrderRepository } from './order.repository';
import { Order } from './order.model';
import { HttpClientModule } from '@angular/common/http';
import { RestDataSource } from './rest.datasource';
import { AuthService } from './auth.service';
@NgModule({
  providers: [
    ProductRepository,
    StaticDataSource,
    Cart,
    OrderRepository,
    Order,
    { provide: StaticDataSource, useClass: RestDataSource }, RestDataSource, AuthService
  ],
  imports: [HttpClientModule],
})
export class ModelModule {}
