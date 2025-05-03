import { Controller, Get } from '@nestjs/common';
import { PetService } from 'generated-sources/clients/petstore';
import { firstValueFrom } from 'rxjs';

@Controller('users')
export class UsersController {
    constructor(private readonly petService: PetService) { }

    @Get()
    async getUsers() {
        const { data: listOfPets } = await firstValueFrom(this.petService.findPetsByStatus(['available']))
        return listOfPets
    }
}
