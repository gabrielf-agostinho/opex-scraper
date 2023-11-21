import { ICapitulo } from "./ICapitulo";

export interface IVolume {
  titulo: string;
  capitulos: Array<ICapitulo>; 
}