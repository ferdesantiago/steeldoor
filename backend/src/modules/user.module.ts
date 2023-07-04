import { Module } from "@nestjs/common";
import { UserController } from "src/controllers/user.controller";
import { usersProviders } from "src/providers/users.provider";
import { UserService } from "src/services/user.service";
import { DatabaseModule } from "./database.module";

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [UserService, ...usersProviders]
})
export class UserModule { }