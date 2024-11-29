import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { InvalidComponent } from './invalid/invalid.component';

export const routes: Routes = [
    {path: '', component: TechnologiesComponent},
    {path: 'books', component: BooksComponent},
    {path: 'technology', component: TechnologiesComponent},
    {path: '**', component: InvalidComponent}
];
