import { Component } from '@angular/core';
import { FilterMatchMode, PrimeNGConfig } from 'primeng/api';
import { LayoutService } from './layout/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private _primengConfig: PrimeNGConfig,
    private _layoutService: LayoutService,
  ) {
    this._setTheme();
    this._configurePrimeNG();
  }

  private _setTheme(): void {
    this._layoutService.theme = this._layoutService.theme;
  }

  private _configurePrimeNG(): void {
    this._primengConfig.ripple = true;

    this._primengConfig.setTranslation({
      startsWith: 'Começa com',
      contains: 'Contém',
      notContains: 'Não contém',
      endsWith: 'Termina com',
      equals: 'Igual',
      notEquals: 'Diferente',
      noFilter: 'Sem filtro',
      lt: 'Menor que',
      lte: 'Menor que ou igual a',
      gt: 'Maior que',
      gte: 'Maior que ou igual a',
      is: 'É',
      isNot: 'Não é',
      before: 'Antes',
      after: 'Depois',
      dateIs: 'Data é',
      dateIsNot: 'Data não é',
      dateBefore: 'Data é antes',
      dateAfter: 'Data é depois',
      clear: 'Limpar',
      apply: 'Aplicar',
      matchAll: 'Corresponde a todos',
      matchAny: 'Corresponde a algum',
      addRule: 'Adicionar regra',
      removeRule: 'Remover regra',
      accept: 'Sim',
      reject: 'Não',
      choose: 'Escolher',
      upload: 'Enviar',
      cancel: 'Cancelar',
      dayNames: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      dateFormat: 'dd/mm/yyyy',
      firstDayOfWeek: 1,
      today: 'Hoje',
      weekHeader: 'Semana',
      weak: 'Fraco',
      medium: 'Médio',
      strong: 'Forte',
      passwordPrompt: 'Insira uma senha',
      emptyMessage: 'Nenhum resultado encontrado',
      emptyFilterMessage: 'Nenhum resultado encontrado'
    });

    this._primengConfig.filterMatchModeOptions = {
      text: [
        FilterMatchMode.STARTS_WITH,
        FilterMatchMode.CONTAINS,
        FilterMatchMode.NOT_CONTAINS,
        FilterMatchMode.ENDS_WITH,
        FilterMatchMode.EQUALS,
        FilterMatchMode.NOT_EQUALS
      ],
      numeric: [
        FilterMatchMode.EQUALS,
        FilterMatchMode.NOT_EQUALS,
        FilterMatchMode.LESS_THAN,
        FilterMatchMode.LESS_THAN_OR_EQUAL_TO,
        FilterMatchMode.GREATER_THAN,
        FilterMatchMode.GREATER_THAN_OR_EQUAL_TO
      ],
      date: [
        FilterMatchMode.DATE_IS,
        FilterMatchMode.DATE_IS_NOT,
        FilterMatchMode.DATE_BEFORE,
        FilterMatchMode.DATE_AFTER
      ]
    };
  }
}
