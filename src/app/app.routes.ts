import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactFormComponent } from './contact/components/contact-form/contact-form.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact-form', component: ContactFormComponent},
    {
        path: 'journal',
        loadChildren: () => import('./journal/journal.module').then(m => m.JournalModule)
    },
    {
        path: 'scidir',
        loadChildren: () => import('./scidir/scidir.module').then(m => m.ScidirModule)
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }

];
