import { Component, inject, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { IconComponent } from '../shared/components/icon/icon.component';
import { PostsService } from '../shared/services/posts.service';
import { CommonModule } from '@angular/common';
import { Post } from '../shared/interface/post';
import { CategoriesService } from '../shared/services/categories.service';
import { Category } from '../shared/interface/category';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IconComponent, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [PostsService, CategoriesService],
})
export class AppComponent implements OnInit {
  postsService = inject(PostsService);
  categoriesService = inject(CategoriesService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  posts$!: Observable<Post[] | null>;
  categories$!: Promise<Category[] | null>;

  ngOnInit(): void {
    this.listCategories();
    this.navigateToCategory('Angular', '/angular');
  }

  navigateToCategory(categoryName: string, categoryPath: string): void {
    this.router.navigate([categoryPath]);

    if (categoryName) {
      this.listPostsByCategory(categoryName);
    }
  }

  listPostsByCategory(categoryName: string) {
    this.posts$ = this.postsService.listPostsByCategory({
      categoryName,
    });
  }

  listCategories(): void {
    this.categories$ = this.categoriesService.listCategories();
  }
}
