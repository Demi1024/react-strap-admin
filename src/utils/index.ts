import { useLocation } from 'react-router-dom';
// 最小展示的是分钟
export const prettySeconds = (value: number) => {
    if (value > 3600) {
      let h = String(value / 3600);
      if (h.indexOf('.') >= 0) {
        h = h.slice(0, h.indexOf('.'));
      }
      h += ' 小时';
      if (value % 3600 > 0) {
        let m = String((value % 3600) / 60);
        if (m.indexOf('.') >= 0) {
          m = m.slice(0, m.indexOf('.'));
        }
        m += ' 分钟';
        return h + ' ' + m;
      } else {
        return h;
      }
    } else {
      let m = String(value / 60);
      if (m.indexOf('.') >= 0) {
        m = m.slice(0, m.indexOf('.'));
      }
      m += ' 分钟';
      return m;
    }
  };
  export const fixIfNotInt = (number: number) => {
    let digit = 2;
  
    if (Number.isInteger(number)) {
      return number;
    } else {
      return number.toFixed(digit);
    }
  };
  export const useQuery = () => {
    return useLocation();
  };

  export const formatCommand = (command: string): string => {
    const withoutNewline = ['python','sleep'];
    let str = command;
    let strArr = str.split(" ");
    let Len = strArr.length;
    if(Len < 3){
      return str;
    }
    let format = strArr.map((item,index) =>{
      if (withoutNewline.indexOf(item) !== -1) {
        return item + '\xa0';
      } else if (typeof item == "undefined" || item == null || item === ""){
        return '';
      } else if (index === Len - 1){
        return item;
      } else {
        return item+ ' \\\n\xa0\xa0';
      }
    });
    let newStr = format.join('');
    return newStr;
  }

