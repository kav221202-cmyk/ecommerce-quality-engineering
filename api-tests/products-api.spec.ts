import { test, expect } from '@playwright/test';

const API_BASE_URL = process.env.API_BASE_URL || 'https://dummyjson.com';

test.describe('Products API Tests', () => {

    test('API-001 - GET Products Returns Successful Response', async ({ request }) => {

        const response = await request.get(
            `${API_BASE_URL}/products`
        );

        expect(response.status()).toBe(200);
    });


    test('API-002 - GET Products Returns JSON Response', async ({ request }) => {

        const response = await request.get(
            `${API_BASE_URL}/products`
        );

        expect(response.ok()).toBeTruthy();

        const contentType = response.headers()['content-type'];

        expect(contentType).toBeTruthy();
        expect(contentType).toContain('application/json');
    });


    test('API-003 - GET Products Returns Product Data', async ({ request }) => {

        const response = await request.get(
            `${API_BASE_URL}/products`
        );

        expect(response.ok()).toBeTruthy();

        const responseBody = await response.json();

        expect(responseBody).toHaveProperty('products');
        expect(Array.isArray(responseBody.products)).toBeTruthy();
        expect(responseBody.products.length).toBeGreaterThan(0);
    });


    test('API-004 - Verify Product Contains Required Fields', async ({ request }) => {

        const response = await request.get(
            `${API_BASE_URL}/products/1`
        );

        expect(response.status()).toBe(200);

        const product = await response.json();

        expect(product).toHaveProperty('id');
        expect(product).toHaveProperty('title');
        expect(product).toHaveProperty('price');
        expect(product).toHaveProperty('description');
        expect(product).toHaveProperty('category');
    });


    test('API-005 - GET Single Product Returns Correct ID', async ({ request }) => {

        const response = await request.get(
            `${API_BASE_URL}/products/1`
        );

        expect(response.status()).toBe(200);

        const product = await response.json();

        expect(product.id).toBe(1);
    });


    test('API-006 - GET Nonexistent Product Returns Error', async ({ request }) => {

        const response = await request.get(
            `${API_BASE_URL}/products/99999`
        );

        expect(response.status()).toBe(404);
    });

});