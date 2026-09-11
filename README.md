# CliniAgenda — Agendamento de Consultas

Sistema acadêmico completo para gestão de consultas, com REST API NestJS e interface web responsiva. A interface usa exclusivamente **localStorage**, sem Prisma ou banco de dados, mantendo dados entre sessões do navegador.

## Tecnologias
- Node.js, NestJS e TypeScript (API REST com módulos, DTOs e `class-validator`)
- HTML, CSS e JavaScript (frontend servido pelo Nest)
- localStorage do navegador (persistência da interface)

## Instalação e execução
```bash
npm install
npm run start:dev
# abra http://localhost:3000
npm run build
npm run start
```

## Estrutura
`src/` contém módulos de `pacientes`, `medicos`, `especialidades`, `clinicas`, `agendamentos`, `consultas` e `storage`. Cada módulo possui controller, service, module e DTOs quando aplicável. `src/public` contém a aplicação web.

## Uso
Cadastre especialidades e clínicas, depois médicos e pacientes. Em **Agendamentos**, crie a consulta e avance pelo fluxo **AGENDADO → CONFIRMADO → CHECK_IN → REALIZADO**. A realização solicita diagnóstico e gera uma Consulta. É permitido cancelar apenas AGENDADO ou CONFIRMADO. A interface inicia com dados de demonstração e oferece o botão para restaurá-los.

## Rotas REST
- `POST/GET/GET :id/PATCH :id/DELETE :id` para `/pacientes`, `/medicos`, `/especialidades` e `/clinicas`.
- `POST/GET/GET :id/PATCH :id/DELETE :id` para `/agendamentos`.
- `PATCH /agendamentos/:id/confirmar`, `/check-in`, `/cancelar`; `POST /agendamentos/:id/realizar`.
- `GET /consultas` e `GET /consultas/:id`.

A API aplica validação de e-mail, CPF, CRM e datas, retorna 404 para registros ausentes, 409 em CPF/CRM/horário duplicado e bloqueia referências inválidas e exclusões com dependências.

## Dados do localStorage
As chaves são `pacientes`, `medicos`, `especialidades`, `clinicas`, `agendamentos` e `consultas`. Relacionamentos são IDs: médico guarda `especialidadeId` e `clinicaId`; agendamento guarda `pacienteId` e `medicoId`; consulta guarda `agendamentoId`.
