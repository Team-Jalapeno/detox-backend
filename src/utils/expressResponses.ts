import { Response } from 'express';

export const badRequest = (res: Response, msg?: string) => res.status(400).send({ message: msg || 'Error: Bad request error' });
export const serverError = (res: Response, msg?: string) => res.status(500).send({ message: msg || 'Error: Internal server error' });
export const notFound = (res: Response, msg?: string) => res.status(404).send({ message: msg || 'Error: 404 not found' });