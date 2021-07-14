import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const restaurant = JSON.parse(message.data);
    NotificationHelper.sendNotification({
      title: `${restaurant.title} is open now!`,
      options: {
        body: restaurant.decription,
        image: `${`${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}`}`,
      },
    });
  },
};

export default WebSocketInitiator;
