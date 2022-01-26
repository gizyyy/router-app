import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Learning } from '../learning.model';

@Component({
  selector: 'app-learning-detail',
  templateUrl: './learning-detail.component.html',
  styleUrls: ['./learning-detail.component.css'],
})
export class LearningDetailComponent implements OnInit {
  @Input() learning: Learning;
  learningId: number;
  redText: boolean;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.learningId = +params['id'];
    });
    this.route.queryParams.subscribe(
      (params) => (this.redText = params['redText'])
    );
  }
}
