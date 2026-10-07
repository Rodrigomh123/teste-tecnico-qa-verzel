# Verzel Store — Teste Técnico de QA

Entrega do teste técnico de QA da Verzel Store.

## 1. O que foi entregue

Esta entrega segue o checklist e as regras do enunciado:

- Cenários de teste levantados a partir da documentação.
- Execução manual e exploratória com resultado de cada cenário.
- Registro dos bugs encontrados.
- Evidências da execução.
- Automação de cenários com Playwright.
- README explicando como executar a automação e onde encontrar cada entrega.
- Todos os artefatos mantidos em um único repositório público.

## 2. Estrutura do repositório

```
/
├── README.md
├── Planilha_Execucao_QA_Verzel_Final.xlsx
├── BUGS.md
├── EVIDENCIAS.md
├── package.json
├── playwright.config.js
├── .gitignore
└── tests/
    └── api.spec.js
```

## 3. Resultado final da execução manual

A planilha contém a execução completa dos **48 cenários**, sem cenários pendentes:

| Grupo | Executados | PASS | FAIL |
|---|---:|---:|---:|
| Interface CT01–CT28 | 28 | 26 | 2 |
| API01–API11 | 11 | 8 | 3 |
| API12–API20 | 9 | 8 | 1 |
| **Total** | **48** | **42** | **6** |

Foram incorporadas **39 evidências visuais** na aba **Evidências** da planilha.

### Bugs registrados

Foram registrados 5 bugs:

- **BUG-001** — Frete grátis no limite de R$ 200,00.
- **BUG-002** — Quantidade negativa retorna código incorreto.
- **BUG-003** — API aceita quantidade acima de 5.
- **BUG-004** — Cupom expirado retorna mensagem incorreta no cálculo.
- **BUG-005** — Item sem quantidade retorna `QUANTIDADE_INVALIDA` em vez de `ITEM_INVALIDO`.

Os detalhes estão em `BUGS.md` e na aba `Bugs` da planilha.

## 4. Automação com Playwright

Foi incluída automação de cenários da API com Playwright, usando o `request` fixture.

Cenários automatizados:

1. Listar produtos — `GET /api/produtos` — esperado HTTP 200.
2. Consultar produto existente — `GET /api/produtos/P001` — esperado HTTP 200.
3. Calcular carrinho válido sem cupom — esperado HTTP 200 e total R$ 239,70.
4. Rota inexistente — esperado HTTP 404 com `ROTA_NAO_ENCONTRADA`.

Assim, a entrega contém **4 cenários automatizados**, atendendo ao requisito de pelo menos 3.

### Pré-requisitos

- Node.js instalado.
- npm disponível.

### Instalação

```bash
npm install
npx playwright install
```

### Executar os testes automatizados

```bash
npx playwright test
```

### Executar com relatório HTML

```bash
npx playwright test --reporter=html
npx playwright show-report
```

> A automação foi preparada como parte da entrega. Os resultados manuais apresentados são os efetivamente observados durante o teste técnico.

## 5. Onde encontrar cada entrega

- **Cenários, execução, resultados e evidências:** `Planilha_Execucao_QA_Verzel_Final.xlsx`
- **Bugs:** `BUGS.md` e aba `Bugs` da planilha
- **Evidências:** aba `Evidências` da planilha e `EVIDENCIAS.md`
- **Automação:** `tests/api.spec.js`
- **Configuração:** `playwright.config.js`

## 6. Regras do enunciado consideradas

- Prazo informado no enunciado: 5 dias corridos a partir do recebimento.
- Formato livre para cenários, bugs e evidências.
- Uso de IA permitido e declarado.
- Execução em ambiente compartilhado.
- Testes de carga, estresse e segurança fora do escopo.
- Ambiguidades foram interpretadas com base na documentação fornecida.

### Uso de IA

IA foi utilizada como apoio à organização dos cenários, revisão da documentação, análise dos resultados/evidências, estruturação dos registros e preparação dos artefatos. A execução dos testes e coleta das evidências foram realizadas no ambiente de QA.

## 7. Ambiente

Base URL:

`https://verzel-store.qa-test-verzel-store.workers.dev`
