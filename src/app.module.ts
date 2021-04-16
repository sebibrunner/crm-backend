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

@Module({
  imports: [
    ProductModule,
    PositionModule,
    DocumentModule,
    OfferModule,
    InvoiceModule,
    CustomerModule,
    UserModule,
    AddressModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
