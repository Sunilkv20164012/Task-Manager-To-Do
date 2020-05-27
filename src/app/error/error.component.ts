import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
// import { Subscription } from "rxjs";

// import { ErrorService } from "./error.service";

@Component({
  templateUrl: "./error.component.html",
  selector: "app-error",
  // styleUrls: ["./error.component.css"]
})
export class ErrorComponent {
  // data: { message: string };
  // private errorSub: Subscription;
  constructor(public dialogRef: MatDialogRef<ErrorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }) {}
  // constructor(private errorService: ErrorService) {}

  // ngOnInit() {
  //   this.errorSub = this.errorService.getErrorListener().subscribe(message => {
  //     this.data = { message: message };
  //   });
  // }

  // onHandleError() {
  //   this.errorService.handleError();
  // }

  closeDialog() {
    this.dialogRef.close({ event: 'close' });
  }

  // ngOnDestroy() {
  //   this.errorSub.unsubscribe();
  // }
}
