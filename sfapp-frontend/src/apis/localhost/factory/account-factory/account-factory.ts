import { faker } from '@faker-js/faker/locale/en';
import { Factory } from 'miragejs';
import { FactoryDefinition, ModelDefinition } from 'miragejs/-types';
import IAccountBaseDTO, { IAccountDTO } from '../../../account-api/dtos/account-response-dto';

// MAKE SURE the first letter is lowerCase
export const ACCOUNT_TABLE_NAME = 'accountTable';
export type AccountFactoryType = typeof AccountFactory;
export type AccountModal = ModelDefinition<IAccountDTO>;

export const AccountFactory: FactoryDefinition<IAccountDTO> = Factory.extend({
  id: () => {
    return faker.datatype.uuid();
  },
  name: () => {
    return faker.company.name();
  },
});

export const SPECIFIC_SCENARIOS: IAccountDTO = {
  id: faker.datatype.uuid(),
  name: 'Formstack',
};
