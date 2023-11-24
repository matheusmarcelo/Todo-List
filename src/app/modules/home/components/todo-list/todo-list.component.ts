import { FormsModule } from '@angular/forms';
import { Component, DoCheck } from '@angular/core';
import { CommonModule, LowerCasePipe } from '@angular/common';

// Components
import { TodoInputAddItensComponent } from '../todo-input-add-itens/todo-input-add-itens.component';
import { TodoButtonDeleteAllComponent } from '../todo-button-delete-all/todo-button-delete-all.component';

// Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoInputAddItensComponent, TodoButtonDeleteAllComponent, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]'); // Pegando nossa lista armazenada no localStorage e convertendo para JSON ou se não encontrar, passará um array vazio

  ngDoCheck(): void {
    this.setLocalStorage();
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public detelAllTaskList() {
    window.confirm("Você deseja realmente deletar tudo?") ? this.taskList = [] : false
  }

  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false });
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm("Task está vazia, deseja Deletar?");

      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorage(): void {
    if (this.taskList) {
      // Ordenando a lista (itens checkados vão para o final da lista)
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));

      // Armazenando a lista no localStorage
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }
}
