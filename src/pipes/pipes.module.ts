import { NgModule } from '@angular/core';
import { PipesValidaRutPipe } from './pipes-valuda-rut/pipes-valuda-rut';
import { PipesValidaFechaPipe } from './pipes-valuda-fecha/pipes-valuda-fecha';
import { PipesComunaPipe } from './pipes-comuna/pipes-comuna';
@NgModule({
	declarations: [PipesValidaRutPipe,
    PipesValidaFechaPipe,
    PipesComunaPipe],
	imports: [],
	exports: [PipesValidaRutPipe,
    PipesValidaFechaPipe,
    PipesComunaPipe]
})
export class PipesModule {}
