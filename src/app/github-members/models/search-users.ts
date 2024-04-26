import { Member } from "./member";

export interface SearchUsers {
    total_count: number;
    incomplete_results: boolean;
    items: Member[];
}
