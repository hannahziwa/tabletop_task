
const garage = {
    "count": 0,
    "cars":[]
};

export const Garage = {   
    add(value){
        garage.cars[garage.count] = value;
        garage.count++;
    },
    delete(reg){
        for (let i = 0; i < garage.cars.length; i++) {
            if (garage.cars[i].reg === reg) {
                const deletedCar = garage.cars.splice(i, 1)[0];
                garage.count--;
                return deletedCar;
            }
        }
    },
    get(reg){
        for (let i = 0; i < garage.cars.length; i++) {
            if (garage.cars[i].reg === reg) {
                return garage.cars[i];
            }
        }
        return null;
    }
}