function milesToKilo(miles) {
    const kilo = miles * 1.60934;
    return kilo;
}

const miles = 2;
const kiloMeter = milesToKilo(miles);
console.log(kiloMeter);