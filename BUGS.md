# Bugs encontrados

Os bugs abaixo foram registrados a partir dos resultados efetivamente observados durante a execução manual e comparados com a documentação fornecida para o teste.

## BUG-001 — Frete grátis no limite de R$ 200,00

- **Cenários:** CT10 / CT19
- **Severidade:** Média
- **Status:** Aberto
- **Esperado:** subtotal de R$ 200,00 deve resultar em frete grátis.
- **Obtido:** a interface informa que faltam R$ 0,00 para o frete grátis, mas mantém frete de R$ 19,90.
- **Regra:** CA06.

## BUG-002 — Quantidade negativa retorna código incorreto

- **Cenário:** API05
- **Severidade:** Média
- **Status:** Aberto
- **Esperado:** HTTP 422 com `QUANTIDADE_INVALIDA`.
- **Obtido:** HTTP 422, porém com código `ITENS_OBRIGATORIOS`.

## BUG-003 — API aceita quantidade acima de 5

- **Cenário:** API06
- **Severidade:** Alta
- **Status:** Aberto
- **Esperado:** HTTP 422 com `QUANTIDADE_MAXIMA_EXCEDIDA`.
- **Obtido:** quantidade 6 foi aceita e a API retornou HTTP 200.
- **Regra:** CA10.

## BUG-004 — Cupom expirado retorna mensagem incorreta no cálculo

- **Cenário:** API09
- **Severidade:** Média
- **Status:** Aberto
- **Esperado:** HTTP 200, sem desconto, com mensagem indicando cupom expirado.
- **Obtido:** HTTP 200, sem desconto, mas `cupom.mensagem` informou `Cupom inválido.`.
- **Regra:** CA04 e comportamento documentado de `/api/carrinho/calcular`.

## BUG-005 — Item sem quantidade retorna código incorreto

- **Cenário:** API16
- **Severidade:** Média
- **Status:** Aberto
- **Esperado:** HTTP 422 com `ITEM_INVALIDO`.
- **Obtido:** HTTP 422 com `QUANTIDADE_INVALIDA`.

## Resumo

| Bug | Cenário(s) | Severidade | Status |
|---|---|---|---|
| BUG-001 | CT10 / CT19 | Média | Aberto |
| BUG-002 | API05 | Média | Aberto |
| BUG-003 | API06 | Alta | Aberto |
| BUG-004 | API09 | Média | Aberto |
| BUG-005 | API16 | Média | Aberto |
