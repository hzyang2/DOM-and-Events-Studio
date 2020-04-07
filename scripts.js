// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function () {
    // command button elements
    const takeOffButton = document.getElementById('takeoff');
    const landingButton = document.getElementById('landing');
    const abortButton = document.getElementById('missionAbort');

    // direction button elements
    const upButton = document.getElementById('up');
    const downButton = document.getElementById('down');
    const rightButton = document.getElementById('right');
    const leftButton = document.getElementById('left');

    // rocket element
    const rocket = document.getElementById('rocket'); // added to make the rocket land and take off on command

    const flightStatus = document.getElementById('flightStatus');
    const flightScreen = document.getElementById('shuttleBackground');
    const shuttleHeight = document.getElementById('spaceShuttleHeight');
    // 2
    takeOffButton.addEventListener('click', function () {
        //2a
        let isConfirmed = confirm('Is the shuttle ready for takeoff?');

        if (isConfirmed) {
            //2b,c,d
            flightStatus.innerHTML = 'Shuttle in flight';
            flightScreen.style.backgroundColor = 'blue';
            shuttleHeight.innerHTML = '10,000';
            rocket.style.bottom = '120px'; // move the rocket into the center of the square when we take off
        }
    });

    // 3
    landingButton.addEventListener('click', function () {
        // 3a,b,c,d
        alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.innerHTML = 'The shuttle has landed';
        flightScreen.style.backgroundColor = 'green';
        shuttleHeight.innerHTML = '0';
        rocket.style.bottom = '0'; // land the rocket at the bottom of the square
    });

    // 4
    abortButton.addEventListener('click', function () {
        // 4a
        let isConfirmed = confirm('Are you sure you want to abort the mission?');

        if (isConfirmed) {
            flightStatus.innerHTML = 'Mission Aborted';
            flightScreen.style.backgroundColor = 'green';
            shuttleHeight.innerHTML = '0';
            // return rocket to original landing:
            rocket.style.bottom = '0';
            rocket.style.left = '125px';
        }
    });

    // 5
    leftButton.addEventListener('click', function () {
        rocket.style.left = String(parseInt(rocket.style.left, 10) - 10) + 'px';
    });
    rightButton.addEventListener('click', function () {
        rocket.style.left = String(parseInt(rocket.style.left, 10) + 10) + 'px';
    });
    upButton.addEventListener('click', function () {
        rocket.style.bottom = String(parseInt(rocket.style.bottom, 10) + 10) + 'px';
    });
    downButton.addEventListener('click', function () {
        rocket.style.bottom = String(parseInt(rocket.style.bottom, 10) - 10) + 'px';
    });
});