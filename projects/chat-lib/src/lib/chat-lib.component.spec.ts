import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatLibComponent } from './chat-lib.component';

describe('ChatLibComponent', () => {
  let component: ChatLibComponent;
  let fixture: ComponentFixture<ChatLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
