import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Output() toggleFilter: EventEmitter<any> = new EventEmitter();
  sidebarItems: SideBar[] = [
    { id: 'todo', pageLink: 'todo', pageTitle: 'Todo', icon: 'fas fa-bell' },
    { id: 'alarm', pageLink: 'alarm', pageTitle: 'Alarm', icon: 'fas fa-clock' },
    { id: 'history', pageLink: 'history', pageTitle: 'History', icon: 'fas fa-history' },
  ];

  expandSidebar = true;
  showOverlay = false;
  selectedItemIndex = '';
  selectedSubItemIndex = '';
  subMenuExpand = '';

  ngOnInit() { }

  sidebarClicked(item) {
    this.toggleFilter.emit(item);
   }
}

export interface SideBar {
  id: string;
  parentId?: string;
  pageLink: string;
  pageTitle: string;
  icon: string;
}
