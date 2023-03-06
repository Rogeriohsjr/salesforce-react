import { createServer, Model, Registry, Server } from 'miragejs';
import Schema from 'miragejs/orm/schema';
import IAccountBaseDTO from '../account-api/dtos/account-response-dto';
import { SIMPLE_ACCOUNTS } from './factory/account-factory/account-factory';

type AppRegistry = Registry<{}, {}>;
type AppSchema = Schema<AppRegistry>;

export function makeServer({ environment = 'test', showLogging = true } = {}): Server {
  const server = createServer({
    environment,
    models: {},

    routes() {
      this.namespace = 'api';

      this.get('/account', (schema: AppSchema, request): IAccountBaseDTO => {
        return SIMPLE_ACCOUNTS;
      });
    },
  });

  server.logging = showLogging;

  return server;
}
