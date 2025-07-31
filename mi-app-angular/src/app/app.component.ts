import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Todo {
  text: string;
  completed: boolean;
}

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Mi Aplicación Angular';
  currentView = 'home';
  counter = 0;
  newTodo = '';
  todos: Todo[] = [
    { text: 'Aprender Angular', completed: true },
    { text: 'Crear mi primera app', completed: false },
    { text: 'Explorar TypeScript', completed: false }
  ];
  
  contactForm: ContactForm = {
    name: '',
    email: '',
    message: ''
  };
  
  formSubmitted = false;

  setView(view: string) {
    this.currentView = view;
    this.formSubmitted = false;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  reset() {
    this.counter = 0;
  }

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({
        text: this.newTodo.trim(),
        completed: false
      });
      this.newTodo = '';
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  toggleTodo(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }

  onSubmit() {
    if (this.contactForm.name && this.contactForm.email && this.contactForm.message) {
      console.log('Formulario enviado:', this.contactForm);
      this.formSubmitted = true;
      
      // Resetear formulario después de 3 segundos
      setTimeout(() => {
        this.contactForm = {
          name: '',
          email: '',
          message: ''
        };
        this.formSubmitted = false;
      }, 3000);
    }
  }
}
