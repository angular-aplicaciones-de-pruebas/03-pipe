import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})

export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, todas:boolean= true): string {
    value = value.toLowerCase();
    let values:string[] = value.split(" ");
    if(todas){
      for (let key in values) {
          values[key] = values[key][0].toUpperCase()+values[key].substring(1);
      }
    }else{
      values[0] =  values[0][0].toUpperCase()+values[0].substring(1);
    }

    value = values.join(" ");

    return value;
  }
}
