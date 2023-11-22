import { from, firstValueFrom } from 'rxjs';
import rp from "request-promise";
import * as cheerio from "cheerio";

export class BaseService {
  protected readonly OPEX_URL: string = 'https://onepieceex.net/';

  protected async getPage(url: string): Promise<any> {
    return await firstValueFrom(from(rp(url)));
  }

  protected loadPage(html: string): cheerio.CheerioAPI {
    return cheerio.load(html);
  }
}