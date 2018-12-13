const mongoose = require('mongoose');
const userSchema = require("./back-end/models/user/user.schema.server");
const userModel = mongoose.model('UserModelTest', userSchema);
const flightSchema = require("./back-end/models/flight/flight.schema.server");
const flightModel = mongoose.model('FlightModelTest', flightSchema);
const reservationSchema = require("./back-end/models/reservation/reservation.schema.server");
const reservationModel = mongoose.model('ReservationModelTest', reservationSchema);
const scheduleSchema = require("./back-end/models/schedule/schedule.schema.server");
const scheduleModel = mongoose.model('ScheduleModelTest', scheduleSchema);
const promise = require('promise');

function createDummyUsers() {

    const user1 = {
        username: 'admin',
        password: 'admin',
        role:'ADMIN',
        first_name: 'admin',
        last_name: 'admin',
        phone: '123456789',
        passport_number:"X12344555",
    };

    const user2= {
        username: 'alice',
        password: 'alice',
        first_name: 'alice',
        last_name: 'member',
        role:'MEMBER',
        duty:'TICKET_CHECKER',
        phone: '123456789',
        passport_number: 'D1234553',

    };

    const user3= {
        username: 'bob',
        password: 'bob',
        first_name: 'bob',
        last_name: 'checker',
        role:'STAFF',
        duty:'TICKET_CHECKER',
        phone: '123456789',
        passport_number: 'D1234553',

    };

    const user4= {
        username: 'charlie',
        password: 'charlie',
        first_name: 'charlie',
        last_name: 'crew',
        role:'STAFF',
        duty:'CREW',
        phone: '123456789',
        passport_number:"X12344555",

    };

    const user5 = {
        username: 'ed',
        password: 'ed',
        first_name: 'ed',
        last_name: 'checker',
        role:'STAFF',
        duty:'TICKET_CHECKER',
        phone: '123456789',
        passport_number: 'D1234553',

    };

    const user6 ={
        username: 'frank',
        password: 'frank',
        first_name: 'frank',
        last_name: 'checker',
        role:'STAFF',
        duty:'TICKET_CHECKER',
        phone: '123456789',
        passport_number: 'D1234553',
    };

    const user7 ={
        username: 'greg',
        password: 'greg',
        first_name: 'greg',
        last_name: 'crew',
        role:'STAFF',
        duty:'CREW',
        phone: '123456789',
        passport_number:"X12344555",

    };

    const user8 ={
        username: 'han',
        password: 'han',
        first_name: 'han',
        last_name: 'crew',
        role:'STAFF',
        duty:'CREW',
        phone: '123456789',
        passport_number:"X12344555",

    };

    const user9= {
        username: 'ivan',
        password: 'ivan',
        first_name: 'ivan',
        last_name: 'member',
        role:'MEMBER',
        duty:'TICKET_CHECKER',
        phone: '123456789',
        passport_number: 'D1234553',

    };

    const user10 = {
        username: 'dan',
        password: 'dan',
        first_name: 'dan',
        last_name: 'passenger',
        role:'PASSENGER',
        duty:'TICKET_CHECKER',
        phone: '123456789',
        passport_number: 'D1234553',
    };

    flightModel.remove({}).then(
      res => {return reservationModel.remove({})}
    ).then(
        res => {
            return scheduleModel.remove({})
}
    ).then(
       res => {
           console.log("remove all objective model")
       }
    )
    ;

    userModel.remove().then(
        res =>{
            return promise.all([
                userModel.create(user1),
                userModel.create(user2),
                userModel.create(user3),
                userModel.create(user4),
                userModel.create(user5),
                userModel.create(user6),
                userModel.create(user7),
                userModel.create(user8),
                userModel.create(user9),
                userModel.create(user10),
            ])
        }
    ).then(
        res =>{
            console.log("created all dummy users");

        },
        err => {
            console.log(err);
        }
    );
}

module.exports ={
    createDummyUsers,
};

