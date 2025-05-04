import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../shared/services/posts.service';
import { Post } from '../../shared/interface/post';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AppPostHeaderComponent } from '../../shared/components/post-header/post-header.component';
import { FragmentComponent } from '../../shared/components/fragment/fragment.component';

@Component({
  selector: 'app-angular',
  imports: [AppPostHeaderComponent, CommonModule, FragmentComponent],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.css',
  providers: [],
})
export class AngularComponent {
  activeRoute = inject(ActivatedRoute);
  postsService = inject(PostsService);
  post$!: Observable<Post | null>;

  constructor() {
    this.activeRoute.params.subscribe((params) => {
      const slug = params['slug'];

      if (slug) {
        this.findPost(slug);
      }
    });
  }

  findPost(slug: string) {
    this.post$ = this.postsService.findPostBySlug(slug);
  }
}
