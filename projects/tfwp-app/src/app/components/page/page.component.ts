import { Component, Input } from '@angular/core';
import { PageConfig } from '../../models/PageConfig.interface';
import { PAGE_CONFIG } from '../../../assets/mockData';
import { NgClass, NgForOf, NgSwitch, NgSwitchCase } from '@angular/common';
import { PageSectionName } from '../../models/PageSectionName.enum';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { WidgetListComponent } from '../widget-list/widget-list.component';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [NgForOf, NgSwitch, NgSwitchCase, HeaderComponent, FooterComponent, NgClass, WidgetListComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {
  @Input() pageConfig: PageConfig = PAGE_CONFIG;

  PageSectionName = PageSectionName;

  currentLayout: string = 'horisontal' 

  changeLayout() {}
}
