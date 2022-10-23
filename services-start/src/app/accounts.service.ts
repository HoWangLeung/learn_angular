export class AccountsService {
  accounts = [
    {
      name: "Master Account",
      status: "active",
    },
    {
      name: "Test Account",
      status: "active",
    },
    {
      name: "Hidden Account",
      status: "active",
    },
  ];

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
  }

  updateStatus(id: number, status: string ) {
    this.accounts[id].status = status;
  }
}
