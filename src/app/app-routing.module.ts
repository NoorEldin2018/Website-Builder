import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermsComponent } from './terms/terms.component';
import { CategoryTemplatesComponent } from './category-templates/category-templates.component';
import { EditTemplateComponent } from './edit-template/edit-template.component';
import { CategoriesComponent } from './categories/categories.component';


const routes: Routes = [
  {path:'terms',component:TermsComponent},
  {path:'categorytemplates',component:CategoryTemplatesComponent},
  {path:'editTemplate',component:EditTemplateComponent},
  {path:'categories',component:CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
