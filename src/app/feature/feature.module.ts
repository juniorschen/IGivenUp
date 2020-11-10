// app/feature/feature.module.ts
import { NativeScriptCommonModule, NativeScriptRouterModule } from "@nativescript/angular";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { FeatureComponent } from "./feature.component"; // Import all components that will be used in the lazy loaded module

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule
    ],
    declarations: [FeatureComponent], // declare all components that will be used within the module
    providers: [ ] // provide all services that will be used within the module
})
export class FeatureModule { }