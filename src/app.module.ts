import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { PositionModule } from './position/position.module';
import { DocumentModule } from './document/document.module';
import { ContactModule } from './contact/contact.module';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
import { ConfigModule } from '@nestjs/config';
import { CompanyModule } from './company/company.module';
import { AuthModule } from './auth/auth.module';
import * as Joi from '@hapi/joi';
import { DatabaseModule } from './database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      })
    }),
    DatabaseModule,
    ProductModule,
    PositionModule,
    DocumentModule,
    ContactModule,
    UserModule,
    AddressModule,
    CompanyModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
