import { CommonModule } from '@angular/common';
import { Component, HostBinding, input } from '@angular/core';
import {
  FragmentType,
  FragmentValue,
} from '@shared/interface/fragments/fragment';
import { cva } from 'class-variance-authority';

@Component({
  selector: 'app-date-fragment',
  imports: [CommonModule],
  templateUrl: './date-fragment.component.html',
  styleUrl: './date-fragment.component.css',
})
export class DateFragmentComponent {
  id = input<number>();
  data = input<FragmentValue<FragmentType.DATE>>();
  type = input<FragmentType>(FragmentType.DATE);

  variants = cva(`block badge badge-soft badge-primary`);

  @HostBinding('class')
  get classes() {
    return this.variants();
  }
}
