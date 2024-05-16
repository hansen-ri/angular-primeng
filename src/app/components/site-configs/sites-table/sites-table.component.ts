import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { SiteConfigsService } from '../../../services/site-configs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sites-table',
  standalone: true,
  imports: [
    TableModule,
    CommonModule
  ],
  templateUrl: './sites-table.component.html',
  styleUrl: './sites-table.component.scss'
})
export class SitesTableComponent {

  siteConfigs: Array<any> = [];

  constructor(private siteConfigsService: SiteConfigsService) { }

  ngOnInit() {
    this.siteConfigsService.getSiteConfigs().subscribe((data) => {
      this.siteConfigs = data;
    });
  }
}
