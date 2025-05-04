import { Component, input, InputSignal } from '@angular/core';
import { Post } from '../../interface/post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-header',
  imports: [CommonModule],
  templateUrl: './post-header.component.html',
  styleUrl: './post-header.component.css',
})
export class AppPostHeaderComponent {
  post: InputSignal<Post> = input.required<Post>();
}
