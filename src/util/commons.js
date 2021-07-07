const url = "http://localhost:3000/users/images";

export default async function request() {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}
