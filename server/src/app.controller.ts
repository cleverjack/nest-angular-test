import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('pokemons')
  async getPokemons(@Query() query: any): Promise<any> {
    return await this.appService.getPokemons(query.limit, query.page);
  }

  @Get('pokemons/:id')
  async getPokemonDetail(@Param('id') id: string): Promise<any> {
    return await this.appService.getPokemonDetail(id);
  }
}
