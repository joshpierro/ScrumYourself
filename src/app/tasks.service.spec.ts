/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TasksService } from './tasks.service';

describe('TasksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TasksService]
    });
  });

  it('should ...', inject([TasksService], (service: TasksService) => {
    expect(service).toBeTruthy();
  }));
});
