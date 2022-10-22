import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class quote1666315448430 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'quote',
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
            generationStrategy: 'identity',
            isPrimary: true,
          },
          {
            name: 'customerId',
            type: 'uuid',
          },
          {
            name: 'departureId',
            type: 'uuid',
          },
          {
            name: 'departureDate',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'destinationId',
            type: 'uuid',
          },
          {
            name: 'returnDate',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'transportationId',
            type: 'uuid',
          },
          {
            name: 'price',
            type: 'money',
            isNullable: false,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP(6)',
            isNullable: false,
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP(6)',
            isNullable: false,
          },
        ],
      }),
    );

    return queryRunner.createForeignKeys('quote', [
      new TableForeignKey({
        columnNames: ['customerId'],
        referencedTableName: 'customer',
        referencedColumnNames: ['id'],
      }),
      new TableForeignKey({
        columnNames: ['departureId'],
        referencedTableName: 'airport',
        referencedColumnNames: ['id'],
      }),
      new TableForeignKey({
        columnNames: ['destinationId'],
        referencedTableName: 'airport',
        referencedColumnNames: ['id'],
      }),
      new TableForeignKey({
        columnNames: ['transportationId'],
        referencedTableName: 'transportation',
        referencedColumnNames: ['id'],
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.dropTable('quote');
  }
}
