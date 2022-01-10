import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculmComponent } from './curriculm.component';

describe('CurriculmComponent', () => {
  let component: CurriculmComponent;
  let fixture: ComponentFixture<CurriculmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
