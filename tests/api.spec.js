import { test, expect } from '@playwright/test';

test('API12 - listar produtos', async ({ request }) => {
  const response = await request.get('/api/produtos');
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(Array.isArray(body)).toBeTruthy();
  expect(body.some((p) => p.id === 'P001')).toBeTruthy();
});

test('API13 - consultar P001', async ({ request }) => {
  const response = await request.get('/api/produtos/P001');
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.id).toBe('P001');
  expect(body.name).toBe('Camiseta Essencial');
  expect(body.price).toBe(59.9);
});

test('API14 - calcular carrinho válido sem cupom', async ({ request }) => {
  const response = await request.post('/api/carrinho/calcular', {
    data: {
      itens: [
        { produto_id: 'P002', quantidade: 1 },
        { produto_id: 'P004', quantidade: 2 }
      ]
    }
  });
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.subtotal).toBe(239.7);
  expect(body.desconto).toBe(0);
  expect(body.frete).toBe(0);
  expect(body.frete_gratis).toBe(true);
  expect(body.total).toBe(239.7);
});

test('API18 - rota inexistente', async ({ request }) => {
  const response = await request.get('/api/rota-que-nao-existe');
  expect(response.status()).toBe(404);
  const body = await response.json();
  expect(body.code).toBe('ROTA_NAO_ENCONTRADA');
});
