import { Module } from '@nestjs/common';
import { SiteService } from './site.service';
import { SiteController } from './site.controller';

@Module({
  providers: [SiteService],
  controllers: [SiteController]
})
export class SiteModule {}



import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CorporationService } from './corporation.service';
import { CorporationEntity } from './corporation.entity';
import { CorporationController } from './corporation.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CorporationEntity])],
  providers: [CorporationService],
  controllers: [
    CorporationController
  ],
  exports: []
})
export class CorporationModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
  }
}
