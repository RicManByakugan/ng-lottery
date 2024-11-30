import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingcoinsComponent } from './kingcoins.component';

describe('KingcoinsComponent', () => {
  let component: KingcoinsComponent;
  let fixture: ComponentFixture<KingcoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KingcoinsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KingcoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
