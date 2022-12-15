import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface countRecipientNotificationsRequest {
  recipientId: string;
}

type countRecipientNotificationsResponse = {
  count: number;
};

@Injectable()
export class CountRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: countRecipientNotificationsRequest,
  ): Promise<countRecipientNotificationsResponse> {
    const { recipientId } = request;

    const count = await this.notificationsRepository.countManyByRecipientId(
      recipientId,
    );

    return {
      count,
    };
  }
}
