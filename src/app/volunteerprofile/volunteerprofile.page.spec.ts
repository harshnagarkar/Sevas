import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VolunteerprofilePage } from './volunteerprofile.page';

describe('VolunteerprofilePage', () => {
  let component: VolunteerprofilePage;
  let fixture: ComponentFixture<VolunteerprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VolunteerprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
