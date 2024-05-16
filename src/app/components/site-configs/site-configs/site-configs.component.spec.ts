import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteConfigsComponent } from './site-configs.component';

describe('SiteConfigsComponent', () => {
  let component: SiteConfigsComponent;
  let fixture: ComponentFixture<SiteConfigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteConfigsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SiteConfigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
