import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
    const id = Number(params.id)
    if (!isNaN(id)) {
        return {
            id: id
        };
    }
    error(404, "Not found")
}) satisfies PageLoad;