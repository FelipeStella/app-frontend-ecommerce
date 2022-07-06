import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatQuantity'
})
export class FormatQuantityPipe implements PipeTransform {

  transform(value: number, isUnit: boolean): string {
    var moreThanOne: string = value > 1 ? 's' : ''
    var valueFormat: string

    if (isUnit) {
      valueFormat = `${value} unidade${moreThanOne}`
    }
    else {
      valueFormat = `${value} espeto${moreThanOne}`
    }

    return valueFormat;
  }

}
