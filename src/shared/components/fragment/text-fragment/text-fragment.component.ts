import { Component, HostBinding, input } from '@angular/core';
import { FragmentNameType } from '@shared/interface/fragment';
import { cva } from 'class-variance-authority';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-text-fragment',
  imports: [MarkdownComponent],
  templateUrl: './text-fragment.component.html',
  styleUrl: './text-fragment.component.css',
})
export class TextFragmentComponent {
  id = input<number>();
  data = input<string>('');
  type = input<FragmentNameType>(FragmentNameType.TEXT);

  private textVariant = cva(``, {
    variants: {
      variant: {
        [FragmentNameType.TEXT]: 'font-medium',
        [FragmentNameType.H1]: 'font-bold text-4xl',
        [FragmentNameType.H2]: 'font-bold text-3xl',
        [FragmentNameType.H3]: 'font-bold text-2xl',
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
