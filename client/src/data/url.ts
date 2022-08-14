import { schemaBuilder } from '@guygolanil/url-schema-builder/dist/schemaBuilder';

export const urlBuilder = () => {
    const { path, param, endpoint } = schemaBuilder({
        baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000',
    });

    return {
        api: path('api', () => ({
            tasks: path('tasks', endpoint({
                id: param(endpoint({}))
            })),
        })),
    }
}
