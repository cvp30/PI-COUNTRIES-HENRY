import { getAxios } from "../lib/axios";

export const sortCountries = (array, key, orderFn) => {

    if (array.length <= 1) return array;
    let pivot = Math.floor(array.length / 2);
    let left = [];
    let right = [];

    for (let i = 0; i < array.length; i++) {
        if (i === pivot) continue;
        orderFn(array[i][key], array[pivot][key]) ?
            left.push(array[i])
            :
            right.push(array[i]);
    }
    left = sortCountries(left, key, orderFn);
    right = sortCountries(right, key, orderFn);

    return left.concat(array[pivot], right);
}

export const validate = ({ name, difficulty, duration, idCountries }) => {

    let errors = {};

    if (!name.length) errors.name = 'name is required';

    if (!difficulty) errors.difficulty = 'minimum value is 1'

    if (duration < 1 || duration > 30) errors.duration = 'duration out of range';

    if (!idCountries.length) errors.idCountries = 'must select at least one country';

    return errors;
}

export const getDetailCountry = async ({ params }) => {
    return await getAxios(`/countries/${params.id}`);
}