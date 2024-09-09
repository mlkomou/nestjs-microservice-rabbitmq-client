import { Injectable } from '@nestjs/common';
import { OrderDto } from "./order.dto";

@Injectable()
export class AppService {
  orders: any[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  handleCreateOrder(order: OrderDto) {
    console.log('order form consumer', order);
    this.orders.push(order);
  }
  getOrders() {
    console.log('orders', this.orders);
    return {resp: this.orders, message: "List Orders"};
  }
}
