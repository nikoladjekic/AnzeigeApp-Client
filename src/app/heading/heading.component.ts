import { Component, OnInit } from "@angular/core";

import { DataSharingService } from "src/services/data-sharing.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-heading",
  templateUrl: "./heading.component.html",
  styleUrls: ["./heading.component.css"],
})
export class HeadingComponent implements OnInit {
  searchTerm: string;
  resetPageState: boolean;
  apiUrl: string = environment.API_URL;

  constructor(private _dataShare: DataSharingService) {}

  ngOnInit() {
    this._dataShare.currentResetPageState.subscribe((state) => {
      this.resetPageState = state;
      if (this.resetPageState) {
        this.searchTerm = "";
        this.resetPageState = false;
      }
    });
  }

  searchByName(event) {
    this.searchTerm = event;
    this._dataShare.setNameSearchTerm(this.searchTerm);
  }

  reload() {
    window.location.reload();
  }
}
