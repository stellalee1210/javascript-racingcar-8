import { AppError } from "./AppError.js";
export class CarNameEmptyError extends AppError {}
export class CarNameLengthError extends AppError {}
export class DelimiterError extends AppError {}
export class CountError extends AppError {}
export class CountEmptyError extends AppError {}
export class UnknownError extends AppError {}
