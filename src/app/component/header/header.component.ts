import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { TaskService } from 'src/app/services/task.service';
import {Subscription} from 'rxjs';
import { Router } from '@angular/router';
import { Task } from 'src/app/Task';
import { text } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:String= 'Todo-list';
  showAddTask: boolean = false;
  subscription: Subscription ;
  tasks : Task[] = [];
  // task:Task;
  
  
  constructor(private uiService: UiService, private router:Router, private taskservice: TaskService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value );
  }

  ngOnInit(): void {
    
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();

  }
  hasRoute (route: string){
    return this.router.url === route;
  }
  clearall(task:Task){
    console.log('clear');
    this.taskservice.clearTask(task)

    
  }

}
