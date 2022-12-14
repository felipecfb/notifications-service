import { Body, Controller, Post } from '@nestjs/common';
import { createNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  @Post()
  async create(@Body() body: createNotificationBody) {
    const { recipientId, content, category } = body;
  }
}
