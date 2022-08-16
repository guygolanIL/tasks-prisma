import { Request } from "express";
import { AnyZodObject, z, ZodObject } from "zod";

export function validateRequest<T extends AnyZodObject>(schema: T, req: Request): z.infer<T> {
    const { body, query, params } = req;
    return schema.parse({
        body,
        query,
        params,
    });
}