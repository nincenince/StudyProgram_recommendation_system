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
export const update_school = pl => {
    return {
        type: 'UPDATE_SCHOOL',
        payload: pl
    };
};
export const destroy_school = () => {
    return {
        type: 'DESTROY_SCHOOL'
    };
};
export const update_role = pl => {
    return {
        type: 'UPDATE_ROLE',
        payload: pl
    };
};
export const destroy_role = () => {
    return {
        type: 'DESTROY_ROLE'
    };
};

export const update_edu = pl => {
    return {
        type: 'UPDATE_EDU',
        payload: pl
    };
};
export const destroy_edu = () => {
    return {
        type: 'DESTROY_EDU'
    };
};

export const update_per = pl => {
    return {
        type: 'UPDATE_PER',
        payload: pl
    };
};
export const destroy_per = () => {
    return {
        type: 'DESTROY_PER'
    };
};

export const update_comefrom = pl => {
    return {
        type: 'UPDATE_COMEFROM',
        payload: pl
    };
};
export const destroy_comefrom = () => {
    return {
        type: 'DESTROY_COMEFROM'
    };
};
export const signin_admin = () => {
    return {
        type: 'SIGN_IN_ADMIN'
    }
}
export const signout_admin = () => {
    return {
        type: 'SIGN_OUT_ADMIN'
    }
}