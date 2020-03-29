import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMessageBottomBarComponent } from './chat-message-bottom-bar.component';

describe('ChatMessageBottomBarComponent', () => {
  let component: ChatMessageBottomBarComponent;
  let fixture: ComponentFixture<ChatMessageBottomBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatMessageBottomBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatMessageBottomBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
