import { Body, Controller, Delete, Get, Param, Post, Put, Query, } from '@nestjs/common';
import { CreatNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
   
    constructor(private readonly ninjasService: NinjasService) { }

    @Get()
    getNinjas(@Query('weapon') weapon: 'stars' | 'flames'){
        return this.ninjasService.getNinjas(weapon); 
    }

    @Get(':id')
    getOneNinja(@Param('id') id : string){
        return {
            id,
        };
    }


    @Post()
    createNinja(@Body() createNinjaDto : CreatNinjaDto ){
        return {
            name : createNinjaDto.name,
        };
    }

    @Put(':id')
    updateNinja(@Param('id') id : string , @Body() UpdateNinjaDto : UpdateNinjaDto){
    return {
        id,
        name : UpdateNinjaDto ,
    };
    }

    @Delete(':id')
    removeNinja(@Param('id') id : string){
        return {
            id,
        };
    }

}
