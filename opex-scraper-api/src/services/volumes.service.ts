import { ICapitulo } from "../models/ICapitulo";
import { IVolume } from "../models/IVolume";
import { BaseService } from "./_base/base.service";

export class VolumesService extends BaseService {

  public async getVolumes(): Promise<IVolume[]> {
    const response = await this.getPage(`${this.OPEX_URL}/mangas`);
    const $ = this.loadPage(response);

    const volumes = $('#volumes', response);

    const volumesList: IVolume[] = [];

    for(const volume of volumes.contents()) {
      const title = $('h2', volume).text();
      const subtitle = $('h3', volume).text();

      const chapters = $(volume).find('.volume-capitulo');

      const capitulosList: ICapitulo[] = [];

      chapters.each((index, element) => {
        capitulosList.push({
          titulo: $('span', $(element).html()).text()
        });
      });

      volumesList.push({
        titulo: `${title} - ${subtitle}`,
        capitulos: capitulosList
      });
    }

    return volumesList;
  }
}