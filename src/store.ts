import { writable } from "svelte/store";
import { Topic } from "./types";

export const topcis = writable<Topic[]>([new Topic(1, "test1"), new Topic(2, "bla")]);