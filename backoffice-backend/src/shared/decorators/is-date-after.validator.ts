import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
  isISO8601,
} from 'class-validator';

export function IsDateAfter(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: unknown, propertyName: string) {
    registerDecorator({
      name: 'isDateAfter',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as any)[relatedPropertyName];
          return (
            isISO8601(value) &&
            isISO8601(relatedValue) &&
            new Date(value).getTime() >= new Date(relatedValue).getTime()
          );
        },
      },
    });
  };
}
