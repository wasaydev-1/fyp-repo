// src/admin/admin.module.ts

import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AuthModule } from '../auth/auth.module'; // Import the AuthModule
import { RolesGuard } from '../auth/roles.guard'; // Import RolesGuard if needed

@Module({
  imports: [AuthModule],
  controllers: [AdminController],
  providers: [RolesGuard],
})
export class AdminModule {}
