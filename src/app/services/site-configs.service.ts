import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SiteConfigsService {
  private siteConfigsUrl = '../site-configs.json';

  constructor(private http: HttpClient) { }

  getSiteConfigs() {
    return this.http.get<any[]>(this.siteConfigsUrl);
    // return this.http.get(this.siteConfigsUrl);
  }
}
