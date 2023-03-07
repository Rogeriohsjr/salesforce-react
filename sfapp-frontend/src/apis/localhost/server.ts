import { createServer, Model, Registry, Server } from 'miragejs';
import Schema from 'miragejs/orm/schema';
import IAccountBaseDTO, { IAccountDTO } from '../account-api/dtos/account-response-dto';
import { AccountFactory, AccountFactoryType, AccountModal, ACCOUNT_TABLE_NAME, SPECIFIC_SCENARIOS } from './factory/account-factory/account-factory';

type AppRegistry = Registry<
  {
    [ACCOUNT_TABLE_NAME]: AccountModal;
  },
  {
    [ACCOUNT_TABLE_NAME]: AccountFactoryType;
  }
>;
type AppSchema = Schema<AppRegistry>;

export function makeServer({ environment = 'test', showLogging = true } = {}): Server {
  const server = createServer({
    environment,
    models: {
      [ACCOUNT_TABLE_NAME]: Model as AccountModal,
    },

    factories: {
      [ACCOUNT_TABLE_NAME]: AccountFactory,
    },

    seeds(pServer: Server<AppRegistry>) {
      pServer.create(ACCOUNT_TABLE_NAME, SPECIFIC_SCENARIOS);
      pServer.createList(ACCOUNT_TABLE_NAME, 10);
    },

    routes() {
      this.namespace = 'api';

      this.get('/account', (schema: AppSchema, request): IAccountBaseDTO => {
        const listOfAccounts = schema.all(ACCOUNT_TABLE_NAME).models;

        const accountBase: IAccountBaseDTO = {
          listOfAccounts: [],
        };
        
        listOfAccounts.forEach((fiAccount) => {
          accountBase.listOfAccounts.push(fiAccount.attrs);
        });

        return accountBase;
      });
    },
  });

  server.logging = showLogging;

  return server;
}
