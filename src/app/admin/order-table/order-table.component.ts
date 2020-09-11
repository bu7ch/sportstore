import { Component, OnInit } from '@angular/core';
import { OrderRepository } from 'src/app/model/order.repository';
import { Order } from 'src/app/model/order.model';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css'],
})
export class OrderTableComponent implements OnInit {
  incluedShipped: boolean = false;

  constructor(private repository: OrderRepository) {}

  getOrders(): Order[] {
    return this.repository
      .getOrders()
      .filter((order) => this.incluedShipped || !order.shipped);
  }
  markShipped(order: Order) {
    order.shipped = true;
    this.repository.updateOrder(order);
  }
  deleteOrder(id: number) {
    this.repository.deleteOrder(id) 
  }

  ngOnInit(): void {}
}
