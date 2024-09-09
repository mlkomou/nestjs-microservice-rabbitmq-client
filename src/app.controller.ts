import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern, Payload } from "@nestjs/microservices";
import { OrderDto } from "./order.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('order-places')
  postOrder(@Payload() order: OrderDto) {
    this.appService.handleCreateOrder(order);
  }

  @MessagePattern({cmd: 'get-orders'})
  getOrders() {
    console.log('get-order-send');
    return this.appService.getOrders();
  }
}
