import { Component, computed, HostBinding, input } from '@angular/core';
import { cva } from 'class-variance-authority';
import { LucideAngularModule, icons } from 'lucide-angular';

@Component({
  selector: 'app-icon',
  imports: [LucideAngularModule],
  template: `
    <ng-container>
      @if (iconMap[name()]) {
      <lucide-icon
        [class]="computedClasses()"
        [name]="iconMap[name()]"
        [size]="size()"
        [color]="color()"
      ></lucide-icon>
      }
    </ng-container>
  `,
  styleUrl: './icon.component.css',
})
export class IconComponent {
  name = input<string>('');
  size = input<string>('18');
  color = input<string>('var(--color-base-content)');
  className = input<string>('', { alias: 'class' });
  iconMap: Record<string, any> = {
    ...icons,
  };

  computedClasses = computed(() => this.className());

  @HostBinding('class')
  get classes(): string {
    return this.computedClasses();
  }
}
