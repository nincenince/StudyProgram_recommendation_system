export const update_token = tk => {
    return {
        type: 'UPDATE',
        payload: tk
    };
};
export const destroy_token = () => {
    return {
        type: 'DESTROY'
    };
};
export const signin = () => {
    return {
        type: 'SIGN_IN'
    }
}
export const signout = () => {
    return {
        type: 'SIGN_OUT'
    }
}
export const update_firstname = pl => {
    return {
        type: 'UPDATE_FIRSTNAME',
        payload: pl
    };
};
export const destroy_firstname = () => {
    return {
        type: 'DESTROY_FIRSTNAME'
    };
};
export const update_lastname = pl => {
    return {
        type: 'UPDATE_LASTNAME',
        payload: pl
    };
};
export const destroy_lastname = () => {
    return {
        type: 'DESTROY_LASTNAME'
    };
};
export const update_email = pl => {
    return {
        type: 'UPDATE_EMAIL',
        payload: pl
    };
};
export const destroy_email = () => {
    return {
        type: 'DESTROY_EMAIL'
    };
};
export const update_sex = pl => {
    return {
        type: 'UPDATE_SEX',
        payload: pl
    };
};
export const destroy_sex = () => {
    return {
        type: 'DESTROY_SEX'
    };
};
export const update_age = pl => {
    return {
        type: 'UPDATE_AGE',
        payload: pl
    };
};
export const destroy_age = () => {
    return {
        type: 'DESTROY_AGE'
    };
};