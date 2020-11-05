import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Banner } from "src/models/banner.model";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: "root",
})
export class BannerService {
  private url: string = environment.API_URL + "/api/banner";

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Banner[]>(this.url);
  }

  postNew(banner) {
    return this.http.post<Banner>(this.url + "/add", banner);
  }
}
