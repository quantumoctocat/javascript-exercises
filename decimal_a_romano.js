function r2d(fecha) {
    fecha = fecha.padStart(4, "0");
    let fecha_romana = "";
    for (let digito = 0; digito < fecha.length; digito++) {
        if (digito == 0) {
            switch (fecha[digito]) {
                case "1": fecha_romana += "M";
                    break;
                case "2": fecha_romana += "MM";
                    break;
                default: fecha_romana += "";
                    break;
            }
        console.log(fecha_romana);
        }
        if (digito == 1) {
            switch (fecha[digito]) {
                case "1": fecha_romana += "C";
                    break;
                case "2": fecha_romana += "CC";
                    break;
                case "3": fecha_romana += "CCC";
                    break;
                case "4": fecha_romana += "CD";
                    break;
                case "5": fecha_romana += "D";
                    break;
                case "6": fecha_romana += "DC";
                    break;
                case "7": fecha_romana += "DCC";
                    break;
                case "8": fecha_romana += "DCCC";
                    break;
                case "9": fecha_romana += "CM";
                    break;
                default: fecha_romana += "";
                    break;
            }
        console.log(fecha_romana);
        }
        if (digito == 2) {
            switch (fecha[digito]) {
                case "1": fecha_romana += "X";
                    break;
                case "2": fecha_romana += "XX";
                    break;
                case "3": fecha_romana += "XXX";
                    break;
                case "4": fecha_romana += "XL";
                    break;
                case "5": fecha_romana += "L";
                    break;
                case "6": fecha_romana += "LX";
                    break;
                case "7": fecha_romana += "LXX";
                    break;
                case "8": fecha_romana += "LXXX";
                    break;
                case "9": fecha_romana += "XC";
                    break;
                default: fecha_romana += "";
                    break;
            }
        console.log(fecha_romana);
        }
        if (digito == 3) {
            switch (fecha[digito]) {
                case "1": fecha_romana += "I";
                    break;
                case "2": fecha_romana += "II";
                    break;
                case "3": fecha_romana += "III";
                    break;
                case "4": fecha_romana += "IV";
                    break;
                case "5": fecha_romana += "V";
                    break;
                case "6": fecha_romana += "VI";
                    break;
                case "7": fecha_romana += "VII";
                    break;
                case "8": fecha_romana += "VIII";
                    break;
                case "9": fecha_romana += "IX";
                    break;
                default: fecha_romana += "";
                    break;
            }
        }
    }
    return fecha_romana;
}    
console.log(r2d("1964"));