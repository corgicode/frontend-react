export const required = (message = 'Required.') => (value) => {
    return value ? undefined : message;
};
