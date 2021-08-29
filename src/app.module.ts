import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { PositionModule } from './position/position.module';
import { DocumentModule } from './document/document.module';
import { OfferModule } from './offer/offer.module';
import { InvoiceModule } from './invoice/invoice.module';
import { CustomerModule } from './customer/customer.module';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from './company/company.module';
import { BankdataModule } from './bankdata/bankdata.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

const ENV = process.env.NODE_ENV;

console.log("ENV: ", ENV);
console.log("DATABASE_URL: ", process.env.DATABASE_URL);

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductModule,
    PositionModule,
    DocumentModule,
    OfferModule,
    InvoiceModule,
    CustomerModule,
    UserModule,
    AddressModule,
    CompanyModule,
    BankdataModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
