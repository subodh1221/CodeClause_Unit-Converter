function convertUnit() {
    const numberUnit = document.getElementById("unit").value;
    const unitSelected = document.getElementById("unit_diff");
    const valueUnit = unit_diff.options[unitSelected.selectedIndex].value;
    const kilToMe = (kil) => {
        let meter = (kil * 1000);
        return meter;
    };
    const kilToCen = (kil) => {
        let centimeter = (kil * 100000);
        return centimeter;
    };
    const kilToMil = (kil) => {
        let millimeter = (kil * 1000000);
        return millimeter;
    };
    const meToKil = (me) => {
        let kilometer = (me / 1000);
        return kilometer;
    };
    const meToCen = (me) => {
        let centimeter = (me * 100);
        return centimeter;
    };
    const meToMil = (me) => {
        let millimeter = (me * 1000);
        return millimeter;
    };
    const cenToKil = (cen) => {
        let kilometer = (cen / 100000);
        return kilometer;
    };
    const cenToMe = (cen) => {
        let meter = (cen / 100);
        return meter;
    };
    const cenToMil = (cen) => {
        let millimeter = (cen * 10);
        return millimeter;
    };
    const milToKil = (mil) => {
        let kilometer = (mil / 1000000);
        return kilometer;
    };
    const milToMe = (mil) => {
        let meter = (mil / 1000);
        return meter;
    };
    const milToCen = (mil) => {
        let centimeter = (mil / 10);
        return centimeter;
    };
    let result;
    if (valueUnit == "kil") {
        result = kilToMe(numberUnit);
        document.getElementById("resultContainer").innerHTML = `${result} meters(m)`;
        result = kilToCen(numberUnit);
        document.getElementById("resultContainer2").innerHTML = `${result} centimeters(cm)`;
        result = kilToMil(numberUnit);
        document.getElementById("resultContainer3").innerHTML = `${result} millimeters(mm)`;
    } else if (valueUnit == "me") {
        result = meToKil(numberUnit);
        document.getElementById("resultContainer").innerHTML = `${result} kilometers(km)`;
        result = meToCen(numberUnit);
        document.getElementById("resultContainer2").innerHTML = `${result} centimeters(cm)`;
        result = meToMil(numberUnit);
        document.getElementById("resultContainer3").innerHTML = `${result} millimeters(mm)`;
    } else if (valueUnit == "cen") {
        result = cenToKil(numberUnit);
        document.getElementById("resultContainer").innerHTML = `${result} kilometers(km)`;
        result = cenToMe(numberUnit);
        document.getElementById("resultContainer2").innerHTML = `${result} meters(m)`;
        result = cenToMil(numberUnit);
        document.getElementById("resultContainer3").innerHTML = `${result} millimeters(mm)`;
    } else {
        result = milToKil(numberUnit);
        document.getElementById("resultContainer").innerHTML = `${result} kilometers(km)`;
        result = milToMe(numberUnit);
        document.getElementById("resultContainer2").innerHTML = `${result} meters(m)`;
        result = milToCen(numberUnit);
        document.getElementById("resultContainer3").innerHTML = `${result} centimeters(cm)`;
    }
}

