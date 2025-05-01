import { Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'generated-sources/server/models/create_user.dto';
import { UserDto } from 'generated-sources/server/models/user.dto';

@Controller("users")
export abstract class UsersApi {
    @Get("")
    async _getAll(): Promise<UserDto[]> {
        return this.getAll();
    }

    abstract getAll(): Promise<UserDto[]>;

    @Get(":id")
    async _getBy(id: string): Promise<UserDto> {
        return this.getBy(id);
    }

    abstract getBy(ids: string): Promise<UserDto>;

    @Post("")
    _create(user: CreateUserDto): Promise<UserDto> {
        return this.create(user);
    }

    abstract create(user: CreateUserDto): Promise<UserDto>;
}