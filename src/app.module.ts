import { Module } from '@nestjs/common';
import { StorageModule } from './storage/storage.module';
import { PacientesModule } from './pacientes/pacientes.module'; import { MedicosModule } from './medicos/medicos.module'; import { EspecialidadesModule } from './especialidades/especialidades.module'; import { ClinicasModule } from './clinicas/clinicas.module'; import { AgendamentosModule } from './agendamentos/agendamentos.module'; import { ConsultasModule } from './consultas/consultas.module';
@Module({imports:[StorageModule,PacientesModule,MedicosModule,EspecialidadesModule,ClinicasModule,AgendamentosModule,ConsultasModule]}) export class AppModule {}
