import { CurrencyPipe } from '@angular/common'
import { Pipe, PipeTransform } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

@Pipe({
  name: 'currency'
})
export class CurrencyProxyPipe implements PipeTransform {

  constructor (private translate : TranslateService){}

  public transform(value: any, currencyCode: string): any {
    let ngPipe = new CurrencyPipe(this.translate.currentLang);
    if (this.translate.currentLang === 'es-CO') {
        currencyCode = 'COL'
    }
    return ngPipe.transform(value, currencyCode)
}

}
