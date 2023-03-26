public with sharing class AccountService {
    AccountDAO accountDAO;
    public AccountService() {
        this.accountDAO = new AccountDAO();
    }

    public AccountDTOProvider.ListOfAccountBaseDTO getListOfAllAccountsDTO(){
        AccountDTOProvider.ListOfAccountBaseDTO baseDTO = new AccountDTOProvider.ListOfAccountBaseDTO();

        List<Account> listOfAllAccounts = this.accountDAO.getListOfAllAccounts();
        for (Account fiAccount : listOfAllAccounts) {
            AccountDTOProvider.AccountDTO accountDTO = new AccountDTOProvider.AccountDTO();
            accountDTO.id = fiAccount.Id;
            accountDTO.name = fiAccount.Name;
            baseDTO.listOfAccounts.add(accountDTO);
        }

        return baseDTO;
    }
}