import { CommonModule } from '@angular/common';
import { Component, effect, HostBinding, input, model } from '@angular/core';
import {
  FragmentType,
  FragmentValue,
} from '@shared/interface/fragments/fragment';
import { TabFragment } from '@shared/interface/fragments/tabs-fragment';
import { cva } from 'class-variance-authority';

@Component({
  selector: 'app-tabs-fragment',
  imports: [CommonModule],
  templateUrl: './tabs-fragment.component.html',
  styleUrl: './tabs-fragment.component.css',
})
export class TabsFragmentComponent {
  id = input<number>();
  data = input<FragmentValue<FragmentType.TABS>>();
  type = input<FragmentType>(FragmentType.TABS);
  tabs: TabFragment[] | undefined = [];

  constructor() {
    effect(() => {
      if (this.data()) {
        return;
      }
      this.tabs = JSON.parse(String(this.data()));
    });
  }

  private textVariant = cva(`tabs tabs-lift w-full`);

  @HostBinding('class')
  get classes(): string {
    return this.textVariant();
  }
}
