import type { PageLoad } from "./xray/[id]/$types";

const topcis: Topic[] = [new Topic(1, "test1"), new Topic(2, "bla")]

export const load: PageLoad = ({ params }) => {
    return {
        topics: topcis
    }
}