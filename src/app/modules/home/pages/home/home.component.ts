import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { TodoButtonDeleteAllComponent } from '../../components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';
import { TodoInputAddItensComponent } from '../../components/todo-input-add-itens/todo-input-add-itens.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, TodoButtonDeleteAllComponent, TodoListComponent, TodoInputAddItensComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
