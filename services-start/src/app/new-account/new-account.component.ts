import { Component, EventEmitter, Output } from "@angular/core";
import { AccountsService } from "../accounts.service";
import { LoggingService } from "../logging.service";
@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  providers:[LoggingService,AccountsService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  constructor(private loggingService: LoggingService ,private accountService:AccountsService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus,
    });
    this.loggingService.logStatusChange(accountStatus)
    this.accountService.addAccount(accountName,accountStatus)
  }



}
