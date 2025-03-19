import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TreeNodeComponent } from "./tree-node/tree-node.component";

const routes: Routes = [
  {
    path: "about",
    loadComponent: () => import('./about/about.component').then((m) => m.AboutComponent)

  },
  {
    path: "kings",
    component: TreeNodeComponent,
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo:'kings'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
