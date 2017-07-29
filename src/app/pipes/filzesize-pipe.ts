import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'fileSize' })
export class FileSizePipe implements PipeTransform {
  transform(value: number) {
    let formattedValue: string = '';
    if (value && value >= 1048576) {
      formattedValue = (value/1048576).toFixed(2) + ' MB';
    } else if (value) {
      formattedValue = (value/1024).toFixed(2) + ' KB'
    }
    return formattedValue;
  }
}
