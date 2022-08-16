import { schemaBuilder } from '@guygolanil/url-schema-builder';

export const urlBuilder = () => {
    const { path, param, endpoint } = schemaBuilder();

    return {
        api: path('api', () => ({
            tasks: path('tasks', endpoint({
                id: param(endpoint({}))
            })),
        })),
    }
}
