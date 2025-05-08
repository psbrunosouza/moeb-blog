import { CommonModule } from '@angular/common';
import {
  Component,
  effect,
  HostBinding,
  inject,
  input,
  model,
} from '@angular/core';
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
  imports: [CommonModule, MarkdownComponent],
  templateUrl: './tabs-fragment.component.html',
  styleUrl: './tabs-fragment.component.css',
})
export class TabsFragmentComponent {
  id = input<number>();
  data = input.required<FragmentValue<FragmentType.TABS>>();
  type = input<FragmentType>(FragmentType.TABS);
  tabs: TabFragment[] = [];

  tabContentEnum = TAB_CONTENT_ENUM;

  markdownService = inject(MarkdownService);

  constructor() {
    effect(() => {
      if (this.data) {
        this.tabs = this.data().value.map((tab) => {
          return {
            ...tab,
            content: this.getTabContentByFormat(tab),
          };
        });
      }
    });
  }

  private textVariant = cva(`tabs tabs-lift w-full`);

  ngAfterViewInit() {
    this.markdownService.highlight();
  }

  @HostBinding('class')
  get classes(): string {
    return this.textVariant();
  }

  getTabContentByFormat(tab: TabFragment): string {
    if (tab.type === TAB_CONTENT_ENUM.CODE) {
      return `
      \`\`\`${tab.language}
      ${tab.content}
      \`\`\`
      `;
    }
    return tab.content;
  }
}
