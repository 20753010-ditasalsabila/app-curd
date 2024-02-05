import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { EmployeeComponent } from './pages/employee/employee.component';

export const routes: Routes = [
    {
        path: '',
        component: AuthComponent
    },
    {
        path: 'add',
        data: { title: 'Add Employee' },
        component: EmployeeComponent
    }
];
