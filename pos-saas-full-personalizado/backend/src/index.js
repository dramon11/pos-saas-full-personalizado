import { handleAuth } from './routes/auth.js';
import { handleProducts } from './routes/products.js';
import { handleSales } from './routes/sales.js';
import { handleCustomers } from './routes/customers.js';
import { handleReports } from './routes/reports.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path.startsWith('/auth/')) {
      return handleAuth(request, env);
    }
    if (path.startsWith('/api/products')) {
      return handleProducts(request, env);
    }
    if (path.startsWith('/api/sales')) {
      return handleSales(request, env);
    }
    if (path.startsWith('/api/customers')) {
      return handleCustomers(request, env);
    }
    if (path.startsWith('/api/reports')) {
      return handleReports(request, env);
    }

    return new Response('POS SaaS API', { status: 200 });
  },
};