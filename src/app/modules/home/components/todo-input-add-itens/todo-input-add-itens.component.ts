import { FormsModule } from '@angular/forms';
import { Component, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-input-add-itens',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-input-add-itens.component.html',
  styleUrl: './todo-input-add-itens.component.scss'
})
export class TodoInputAddItensComponent {
  @Output() public sendTask = new EventEmitter();

  public addTask: string = "";

  public submitTask(): void {
    this.addTask = this.addTask.trim();

    if(this.addTask) {
      this.sendTask.emit(this.addTask);
      this.addTask = "";
    } else {
      window.alert("Preencha o campo corretamente!");
    }
  }

  
}
