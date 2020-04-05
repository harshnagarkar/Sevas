// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { IonicModule } from '@ionic/angular';

// import { OrganisationPage } from './organisation.page';

// describe('OrganisationPage', () => {
//   let component: OrganisationPage;
//   let fixture: ComponentFixture<OrganisationPage>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ OrganisationPage ],
//       imports: [IonicModule.forRoot()]
//     }).compileComponents();

//     fixture = TestBed.createComponent(OrganisationPage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   }));

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationPage } from './organisation.page';

describe('OrganisationPage', () => {
  let component: OrganisationPage;
  let fixture: ComponentFixture<OrganisationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrganisationPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
