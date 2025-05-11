import { CommonModule } from '@angular/common';
import {
  Component,
  effect,
  HostBinding,
  inject,
  input,
  model,
} from '@angular/core';
import { PreviewRenderComponent } from '@shared/components/preview-render/preview-render.component';
import {
  FragmentType,
  FragmentValue,
} from '@shared/interface/fragments/fragment';
import {
  TAB_CONTENT_ENUM,
  TabFragment,
} from '@shared/interface/fragments/tabs-fragment';
import { cva } from 'class-variance-authority';
import { MarkdownComponent, MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-tabs-fragment',
  imports: [CommonModule, MarkdownComponent, PreviewRenderComponent],
  templateUrl: './tabs-fragment.component.html',
  styleUrl: './tabs-fragment.component.css',
})
export class TabsFragmentComponent {
  id = input<number>();
  data = input.required<FragmentValue<FragmentType.TABS>>();
  type = input<FragmentType>(FragmentType.TABS);

  tabContentEnum = TAB_CONTENT_ENUM;

  markdownService = inject(MarkdownService);

  private textVariant = cva(`tabs tabs-lift w-full`);

  ngAfterViewInit() {
    this.markdownService.highlight();
  }

  @HostBinding('class')
  get classes(): string {
    return this.textVariant();
  }
}
