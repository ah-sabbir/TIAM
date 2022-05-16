


var vencouverSold = sequelize.define('vencouverSold', {
    PropertyAddress: Sequelize.STRING,
    City: Sequelize.STRING,
    State: Sequelize.STRING,
    ZipCode: Sequelize.STRING,
    FullAddressCleaned:Sequelize.STRING
});


// params: PropertyAddress, City, State, ZipCode
const create_vencouverSold = (params_object)=>{
    return sequelize.sync({force: true }).then(function() {
        return vencouverSold.create(params_object);
    }).then(function(d) {
        // console.log(d.get({
        //     plain: true
        // }));
    });
}