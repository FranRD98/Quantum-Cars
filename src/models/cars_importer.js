import Coche from './Coche.js';

const coches = [
    new Coche(
        'Abarth',
        '500C 595C',
        '1.4 16v TJet',
        'Gasolina',
        2022,
        26999,
        [
            '/coches/AB_500C_1.jpg',
            '/coches/AB_500C_2.jpg',
            '/coches/AB_500C_3.jpg',
            '/coches/AB_500C_4.jpg',
            '/coches/AB_500C_5.jpg'
        ],
        ['Asientos de cuero', 'Aire acondicionado', 'Sistema de sonido premium']
    ),
    new Coche(
        'Mercedes Benz',
        'GLE Coupe',
        '350d 4MATIC',
        'Diesel',
        2022,
        79999,
        [
            '/coches/MB_GLE_Coupe_1.jpg',
            '/coches/MB_GLE_Coupe_2.jpg',
            '/coches/MB_GLE_Coupe_3.jpg',
            '/coches/MB_GLE_Coupe_4.jpg',
            '/coches/MB_GLE_Coupe_5.jpg'
        ],
        ['Asientos de cuero', 'Aire acondicionado', 'Sistema de sonido premium']
    ),
    new Coche(
        'Maserati',
        'Levante GranSport',
        '3.0t v6',
        'Gasolina',
        2022,
        54999,
        [
            '/coches/Mas_LevanteGS_1.jpg',
            '/coches/Mas_LevanteGS_2.jpg',
            '/coches/Mas_LevanteGS_3.jpg',
            '/coches/Mas_LevanteGS_4.jpg',
            '/coches/Mas_LevanteGS_5.jpg'
        ],
        ['Asientos de cuero', 'Aire acondicionado', 'Sistema de sonido premium']
    ),
    new Coche(
        'BMW',
        'X4 M Competition',
        '3.0L TwinTurbo',
        'Gasolina',
        2022,
        89999,
        [
            '/coches/BMW_XRMC_1.jpg',
            '/coches/BMW_XRMC_2.jpg',
            '/coches/BMW_XRMC_3.jpg',
            '/coches/BMW_XRMC_4.jpg',
            '/coches/BMW_XRMC_5.jpg'
        ],
        ['Asientos de cuero', 'Aire acondicionado', 'Sistema de sonido premium']
    ),
    new Coche(
        'BMW',
        'M4 Cabrio',
        '3.0L TwinTurbo',
        'Gasolina',
        2022,
        62999,
        [
            '/coches/BMW_M4Cab_1.jpg',
            '/coches/BMW_M4Cab_2.jpg',
            '/coches/BMW_M4Cab_3.jpg',
            '/coches/BMW_M4Cab_4.jpg',
            '/coches/BMW_M4Cab_5.jpg'
        ],
        ['Asientos de cuero', 'Aire acondicionado', 'Sistema de sonido premium']
    ),
    new Coche(
        'MINI',
        'JOHN COOPER WORKS GP',
        '2.0L Turbo',
        'Gasolina',
        2022,
        44999,
        [
            '/coches/MINI_JCW_GP1.jpg',
            '/coches/MINI_JCW_GP2.jpg',
            '/coches/MINI_JCW_GP3.jpg',
            '/coches/MINI_JCW_GP4.jpg',
            '/coches/MINI_JCW_GP5.jpg'
        ],
        ['Asientos de cuero', 'Aire acondicionado', 'Sistema de sonido premium']
    )
];

console.log(coches);

export default coches;