const num = 50;

//(num == 50) ? console.log("ok") : console.log("error"); // тернарное выражение - условие

switch (num) {
    case 49:
        console.log('no!');
        break;
    case 100:
        console.log('no!');
        break;
    case 50:
        console.log('yes!');
        break;
    default:
        console.log('не в этот раз');
        break;
}