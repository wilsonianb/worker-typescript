import { WorkerEntrypoint } from "cloudflare:workers";

export default class extends WorkerEntrypoint {
  async fetch() { return new Response("Hello from Worker B"); }
  
  add(a: number, b: number) { return a + b; } 
}