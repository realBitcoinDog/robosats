import { WebsocketClient, WebsocketConnection } from '..';
import WebsocketConnectionWeb from '../WebsocketConnectionWeb';

class WebsocketWebClient implements WebsocketClient {
  public open: (path: string) => Promise<WebsocketConnection> = (path) => {
    return new Promise<WebsocketConnection>((resolve, reject) => {
      try {
        const connection = new WebsocketConnectionWeb(path);
        connection.rws.addEventListener('open', () => {
          resolve(connection);
        });
      } catch {
        reject();
      }
    });
  };
}

export default WebsocketWebClient;
