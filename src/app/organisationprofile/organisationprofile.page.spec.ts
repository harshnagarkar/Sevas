import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrganisationprofilePage } from './organisationprofile.page';

describe('OrganisationprofilePage', () => {
  let component: OrganisationprofilePage;
  let fixture: ComponentFixture<OrganisationprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrganisationprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
