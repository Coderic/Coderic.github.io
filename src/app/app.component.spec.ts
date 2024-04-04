import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        RouterModule,
        AngularFireModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideRemoteConfig(() => getRemoteConfig()),
      ],
      providers: [
        { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
/*
  it(`should have as title 'FRONTEND_MGM'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('FRONTEND_MGM');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('FRONTEND_MGM app is running!');
  });
  */
});
