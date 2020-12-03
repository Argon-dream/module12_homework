// Электрические приборы
function ElectricalAppliances(deviceName){
    this.energyСlass = 'A+++',
        this.spinClass = 'B',
        this.deviceName = deviceName,
        this.manufacturer = 'Samsung'
}

// Мощность включенного прибора составляет:
ElectricalAppliances.prototype.switchOnOff = function(deviceName, capacity, switchOn){
    if ((capacity > 0) && (switchOn === true))
    {console.log(`${deviceName}'s capacity is ${capacity} kWh/annum`);}
    else {console.log(`${deviceName} is off`);}
}

// Максимальная загрузка белья:
ElectricalAppliances.prototype.maximumLoading = function(deviceName, maximumLoading){
    console.log(`${deviceName}'s maximum loading is ${maximumLoading} kg`);
}


// Стиральная машина
function WashingMachine(model){
    this.deviceName = 'Washing machine',
        this.model = model,
        this.dryingLaundry = false,
        this.drumLighting = false,
        this.childProtection = true
}

WashingMachine.prototype = new ElectricalAppliances();

// Наличие smart контроля:
WashingMachine.prototype.smartControl = function(deviceName, wifi){
    console.log('The presence of a wifi allows you to control the washing machine remotely using a Smart device (laptop, tablet or smartphone):');
    if (wifi === true) {console.log(`${deviceName} can be controlled remotely`);}
    else {console.log(`${deviceName} cannot be controlled remotely`);}
}


// Сушильная машина
function HeatPumpDryer(model){
    this.deviceName = 'Heat pump dryer',
        this.model = model,
        this.dryingType = 'condensation',
        this.drumLighting = true,
        this.childProtection = true
}

HeatPumpDryer.prototype = new ElectricalAppliances();

// Возможность сушить тяжелые вещи, типо шерсти и обуви:
HeatPumpDryer.prototype.dryHeavyItems = function(deviceName, dryingShelf){
    console.log('The presence of a drying rack allows you to dry heavy items, such as wool and shoes:');
    if (dryingShelf === true) {console.log(`${deviceName} can dry heavy items`);}
    else {console.log(`${deviceName} cannot dry heavy items`);}
}


// Введем по одному экземляру каждой машины
const washMachineWW = new WashingMachine('Washing machine Samsung WW70M644OPW/LE');
const heatPumpDryerDV = new HeatPumpDryer('Heat pump dryer Samsung DV90N62632W/LE');

// Вызовы методов
washMachineWW.switchOnOff('Washing machine Samsung WW70M644OPW/LE', 122, true);
heatPumpDryerDV.switchOnOff('Heat pump dryer Samsung DV90N62632W/LE', 194, false);
washMachineWW.maximumLoading('Washing machine Samsung WW70M644OPW/LE', 7);
heatPumpDryerDV.maximumLoading('Heat pump dryer Samsung DV90N62632W/LE', 9);
washMachineWW.smartControl('Washing machine Samsung WW70M644OPW/LE', true);
heatPumpDryerDV.dryHeavyItems('Heat pump dryer Samsung DV90N62632W/LE', false);