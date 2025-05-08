import { Component, HostBinding, input } from '@angular/core';
import {
  FragmentDataMap,
  FragmentType,
  FragmentValue,
} from '@shared/interface/fragments/fragment';
import { cva } from 'class-variance-authority';
import { MarkdownComponent } from 'ngx-markdown';

type TextFragmentType =
  | FragmentType.CONTENT_TEXT
  | FragmentType.CONTENT_H1
  | FragmentType.CONTENT_H2
  | FragmentType.CONTENT_H3
  | FragmentType.CONTENT_SMALL;

@Component({
  selector: 'app-text-fragment',
  imports: [MarkdownComponent],
  templateUrl: './text-fragment.component.html',
  styleUrl: './text-fragment.component.css',
})
export class TextFragmentComponent {
  id = input<number>();
  data = input<FragmentValue<TextFragmentType>>();
  type = input<TextFragmentType>(FragmentType.CONTENT_TEXT);

  private textVariant = cva(``, {
    variants: {
      variant: {
        [FragmentType.CONTENT_TEXT]: 'font-medium',
        [FragmentType.CONTENT_H1]: 'font-bold text-4xl',
        [FragmentType.CONTENT_H2]: 'font-bold text-3xl',
        [FragmentType.CONTENT_H3]: 'font-bold text-2xl',
        [FragmentType.CONTENT_SMALL]: 'text-sm',
      },
    },
  });

  @HostBinding('class')
  get classes(): string {
    return this.textVariant({
      variant: this.type(),
    });
  }
}
