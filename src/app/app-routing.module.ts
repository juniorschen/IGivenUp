import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { FeatureComponent } from "./feature/feature.component";

const routes: Routes = [
    {
        path: "",
        component: FeatureComponent, children: [
            { path: "teste", loadChildren: () => import("./teste/teste.module").then(m => m.TesteModule) }, // lazy loaded module
            { path: "teste2", loadChildren: () => import("./teste2/teste2.module").then(m => m.Teste2Module) }, // lazy loaded module,
            { path: "", redirectTo: "/teste", pathMatch: "full" },
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
