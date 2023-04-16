import { faker } from '@faker-js/faker/locale/en';
import { Factory } from 'miragejs';
import { FactoryDefinition, ModelDefinition } from 'miragejs/-types';
import { IAccountDTO } from '../../../account-api/dtos/account-response-dto';

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

export const SPECIFIC_SCENARIO: IAccountDTO = {
  id: faker.datatype.uuid(),
  name: 'Formstack',
};


export const ACCOUNT_ERROR_TO_DELETE_PERMISSION_DENIED: IAccountDTO = {
  id: faker.datatype.uuid(),
  name: faker.company.name() +  '- Error to Delete',
};