import { WorkerEntrypoint } from "cloudflare:workers";
export default class extends WorkerEntrypoint {
    fetch(): Promise<Response>;
    add(a: number, b: number): number;
}
