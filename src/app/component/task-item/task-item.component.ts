import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import { text } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onCheckTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
    faTimes = faTimes;
    faCheck = faCheck;


 constructor() {
 this.task ={ text:'',reminder:true, day : '' }
 }

 ngOnInit(){

 }
onDelete(task:Task) {
  this.onDeleteTask.emit(task)
  
}
onToggle(task:Task) {
  this.onToggleReminder.emit(task)
  
}

// onCheck(event: MouseEvent, task: Task) {
//   console.log(1231231);
  
//   event.stopPropagation();
//   if (event.target instanceof HTMLElement) {
//     event.target.style.textDecoration = "line-through";
//   }
//   // Any other logic you want to add for checking off the task
// }

}
