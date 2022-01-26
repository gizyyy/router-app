import { Injectable } from '@angular/core';
import { Learning } from './learning.model';

@Injectable({
  providedIn: 'root',
})
export class LearningService {
  learningList: Learning[] = [
    { id: 1, name: 'Math', subscriberCount: 3 },
    {
      id: 2,
      name: 'German',
      subscriberCount: 1,
    },
  ];

  constructor() {}

  getLearningList(): Learning[] {
    return this.learningList;
  }

  increaseSubscriber(item: Learning) {
    return item.subscriberCount++;
  }
}
