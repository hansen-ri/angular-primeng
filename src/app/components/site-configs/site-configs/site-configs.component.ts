import { Component } from '@angular/core';
import { SitesTableComponent } from '../sites-table/sites-table.component';

@Component({
  selector: 'app-site-configs',
  standalone: true,
  imports: [
    SitesTableComponent
  ],
  templateUrl: './site-configs.component.html',
  styleUrl: './site-configs.component.scss'
})
export class SiteConfigsComponent {

}
