import { Product } from './store'

async function jsonRequest(endpoint: string, jsonData: string): Promise<Response> {
  const res = await fetch(endpoint,{
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: jsonData
  })
  return res;
}

async function jsonRequestEmpty(endpoint: string): Promise<Response> {
  const res = await fetch(endpoint,{
    method: "POST",
    headers: {'Content-Type': 'application/json'}
  })
  return res;
}

function basketData(basket: Product[]){
  const list:Object[] = []
  for(const product of basket){
    list.push({category: product.category, urlId: product.urlId})
  }
  return list;
}

export async function getTest():Promise<Response> {
  const res = await jsonRequestEmpty("http://localhost:31380/service1/API/test");
  console.log(res);
  return await res;
}

export async function getProduct(category: string | string[], urlId: string | string[]):Promise<Product> {
  const res = await jsonRequest("http://localhost:31380/service1/API/product", JSON.stringify({category: category, urlId: urlId}));
  return await res.json();
}


export async function getProducts(category: string | string[]):Promise<Product[]> {
  const res = await jsonRequest("http://localhost:31380/service1/API/products", JSON.stringify({category: category}));
  return await res.json();
}

export async function getProductsCompat(category: string, basket: Product[]):Promise<Product[]> {
  const list = basketData(basket)
  const res = await jsonRequest("http://localhost:31380/service1/API/productsCompat", JSON.stringify({basket: list, category: category}));
  return await res.json();
}

export async function checkCompat(category: string, urlId: string, basket: Product[]):Promise<boolean> {
  const list = basketData(basket)
  const res = await jsonRequest("http://localhost:31380/service1/API/productCompat", JSON.stringify({basket: list, urlId: urlId, category: category}));
  return await res.json();
}
