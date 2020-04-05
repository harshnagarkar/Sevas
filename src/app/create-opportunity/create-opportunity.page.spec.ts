import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateOpportunityPage } from './create-opportunity.page';

describe('CreateOpportunityPage', () => {
  let component: CreateOpportunityPage;
  let fixture: ComponentFixture<CreateOpportunityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOpportunityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateOpportunityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
