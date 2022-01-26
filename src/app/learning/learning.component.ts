import { Component, OnInit } from '@angular/core';
import { Learning } from './learning.model';
import { LearningService } from './learning.service';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css'],
})
export class LearningComponent implements OnInit {
  learningList: Learning[];

  constructor(private learningService: LearningService) {}

  ngOnInit(): void {
    this.learningList = this.learningService.getLearningList();
  }
}
