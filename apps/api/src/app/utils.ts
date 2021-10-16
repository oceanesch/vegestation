import { Transform, TransformFnParams } from 'class-transformer';

export const TransformStringToNumber = () =>
  Transform(({ value }: TransformFnParams) =>
    isNaN(Number(value)) ? value : Number(value),
  );
