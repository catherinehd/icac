import { TestBed, inject } from '@angular/core/testing';

import { ThemeableBrowserService } from './themeable-browser.service';

describe('ThemeableBrowserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeableBrowserService]
    });
  });

  it('should be created', inject([ThemeableBrowserService], (service: ThemeableBrowserService) => {
    expect(service).toBeTruthy();
  }));
});
