const prompt = require( 'prompt-sync' )( { sigint: true } );
let currentX = 0;
let currentY = 0;
let currentFacing = 'NORTH';

console.log( 'Hey there! Welcome to the toy-robot-simulator' );
console.log( '' );
console.log( '--------RULES---------------' );

console.log( 'The rules are simple! Start by placing the robot anywhere on a 5x5 grid.' );
console.log( 'Thereafter you can move the robot using the commands available as long as the robot does not move of the 5x5 grid' );
console.log( '' );
console.log( '--------ALLOWED COMMANDS---------------' );


console.log( 'PLACE X,Y,F' );
console.log( 'MOVE' );
console.log( 'LEFT' );
console.log( 'RIGHT' );
console.log( 'REPORT' );
console.log( '' );
console.log( 'To exit the program please type QUIT' );
console.log( '' );

let input;
let inputCounter = 0;


const isValidInput = ( input ) => {
    let inputCommand = input.substr( 0, ( input.indexOf( " " ) ) );
    console.log( 'Validating input ----' + inputCommand );

    if ( inputCommand !== 'PLACE' ||
        inputCommand !== 'LEFT' ||
        inputCommand !== 'RIGHT' ||
        inputCommand !== 'MOVE' ||
        inputCommand !== 'QUIT' ||
        inputCommand !== 'REPORT' ) {
        return false;
    } else {
        return true;
    }

};

const extractCommand = ( input ) => {
    let commandToExecute;
    let firstWhiteSpace = input.indexOf( " " );
    if ( firstWhiteSpace > 0 ) {
        commandToExecute = input.substring( 0, firstWhiteSpace );
    } else {
        commandToExecute = input;
    }
    return commandToExecute;
};
const handlePlace = ( input ) => {
    currentX = input.substring( input.indexOf( " " ), input.indexOf( ',' ) );
    currentY = input.substring( input.indexOf( "," ) + 1, input.lastIndexOf( "," ) );
    currentFacing = input.substring( input.lastIndexOf( "," ) + 1, input.length );
    console.log( 'X =' + currentX );
    console.log( 'Y =' + currentY );
    console.log( 'F =' + currentFacing );
};

const handleMove = ( input ) => {

    if ( currentFacing === 'NORTH' ) {
        if ( currentY < 4 ) {
            currentY++;
        } else {
            console.log( 'Move prevented. Robot will fall' );
        }

    } else if ( currentFacing === 'SOUTH' ) {
        if ( currentY > 0 ) {
            currentY--;
        } else {
            console.log( 'Move prevented. Robot will fall' );
        }

    } else if ( currentFacing === 'WEST' ) {
        if ( currentX < 4 ) {
            currentX++;
        } else {
            console.log( 'Move prevented. Robot will fall' );
        }

    } else if ( currentFacing === 'EAST' ) {
        if ( currentX > 0 ) {
            currentX--;
        } else {
            console.log( 'Move prevented. Robot will fall' );
        }

    }

};
const handleLeft = ( input ) => {

    if ( currentFacing === 'NORTH' ) {
        currentFacing = 'WEST';

    } else if ( currentFacing === 'SOUTH' ) {
        currentFacing = 'WEST';

    } else if ( currentFacing === 'WEST' ) {
        currentFacing = 'SOUTH';

    } else if ( currentFacing === 'EAST' ) {
        currentFacing = 'NORTH';

    }

};
const handleRight = ( input ) => {
    if ( currentFacing === 'NORTH' ) {
        currentFacing = 'EAST';

    } else if ( currentFacing === 'SOUTH' ) {
        currentFacing = 'EAST';

    } else if ( currentFacing === 'WEST' ) {
        currentFacing = 'NORTH';

    } else if ( currentFacing === 'EAST' ) {
        currentFacing = 'SOUTH';

    }
};
const handleReport = ( input ) => {
    console.log( currentX + ',' + currentY + ',' + currentFacing );
};





while ( input !== 'QUIT' ) {

    input = prompt( 'Please enter a command  ' );

    if ( isValidInput( input ) ) {
        console.log( '' );
        console.log( ' You have entered and invalid command. Valid commands are :' );
        console.log( 'PLACE X,Y,F' );
        console.log( 'MOVE' );
        console.log( 'LEFT' );
        console.log( 'RIGHT' );
        console.log( 'REPORT' );
        console.log( '' );
    } else {

        if ( input !== 'QUIT' ) {

            if ( inputCounter === 0 ) {

                if ( input.length > 5 && ( input.substr( 0, 5 ) === 'PLACE' ) ) {
                    handlePlace( input );


                    inputCounter++;
                } else {
                    console.log( 'You have entered an first incorrect command. You first need to place the robot in the Grid using the PLACE command.' );
                    console.log( 'Please try again' );
                }
            } else {
                inputCounter++;
                console.log( 'Command is ' + extractCommand( input ) );
            }


        }
        else {
            console.log( 'Thank you for playing toy-robot-simulater. GoodBye' );
        }

    }




}
