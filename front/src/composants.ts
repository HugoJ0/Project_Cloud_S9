async function jsonRequestEmpty(endpoint: string): Promise<Response> {
  const res = await fetch(endpoint,{
    method: "POST",
    headers: {'Content-Type': 'application/json'}
  })
  return res;
}

export async function getComposants():Promise<Response> {
  const res = await jsonRequestEmpty("http://localhost:31380/service2/API/composants");
  return await res.json();
}