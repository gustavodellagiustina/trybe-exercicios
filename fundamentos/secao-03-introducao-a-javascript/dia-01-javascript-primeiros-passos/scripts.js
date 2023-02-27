//switch -- case

let trafficLight = 'marrom';

switch (trafficLight) {
    case 'vermelho':
        console.log('PARE!');
        break;

    case 'amarelo':
        console.log('ATENÇÃO!');
        break;

    case 'verde':
        console.log('VÁ!');
        break;

    default:
        console.log('valor não identificado');
}