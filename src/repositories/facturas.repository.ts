import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {UnibookDataSource} from '../datasources';
import {Facturas, FacturasRelations} from '../models';

export class FacturasRepository extends DefaultCrudRepository<
  Facturas,
  typeof Facturas.prototype.id,
  FacturasRelations
> {
  constructor(
    @inject('datasources.unibook') dataSource: UnibookDataSource,
  ) {
    super(Facturas, dataSource);
  }
}
