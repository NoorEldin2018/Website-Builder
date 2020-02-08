import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TermsComponent } from './terms/terms.component';
import { CategoryTemplatesComponent } from './category-templates/category-templates.component';
import { EditTemplateComponent } from './edit-template/edit-template.component';
import { CategoriesComponent } from './categories/categories.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TermsComponent,
    CategoryTemplatesComponent,
    EditTemplateComponent,
    CategoriesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
