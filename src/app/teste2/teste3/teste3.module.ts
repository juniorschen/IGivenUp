// app/feature/feature.module.ts
import { NativeScriptCommonModule } from "@nativescript/angular";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { Teste3Component } from "./teste3.component"; // Import all components that will be used in the lazy loaded module
import { Teste3RoutingModule } from "./teste3.routing"; // import the routing module

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptCommonModule,
        Teste3RoutingModule
    ],
    declarations: [Teste3Component], // declare all components that will be used within the module
    providers: [ ] // provide all services that will be used within the module
})
export class Teste2Module { }