const h1 = {
    fontSize: '1.625rem',
    fontWeight: '700',
    lineHeight: '2rem',
    '@media (min-width:992px)': {
        fontSize: '1.8125rem',
        lineHeight: '2.25rem',
    },
};

const h2 = {
    fontSize: '1.4375rem',
    fontWeight: '500',
    lineHeight: '2rem',
    '@media (min-width:992px)': {
        fontSize: '1.625rem',
    },
};

const h3 = {
    fontSize: '1.25rem',
    fontWeight: '700',
    lineHeight: '1.75rem',
    '@media (min-width:992px)': {
        fontSize: '1.4375rem',
        lineHeight: '2rem',
    },
};

const h4 = {
    fontSize: '1.125rem',
    fontWeight: '700',
    lineHeight: '1.75rem',
    '@media (min-width:992px)': {
        fontSize: '1.25rem',
    },
};

const h5 = {
    fontSize: '1rem',
    fontWeight: '600',
    lineHeight: '1.75rem',
    '@media (min-width:992px)': {
        fontSize: '1.125rem',
    },
};

const h6 = {
    fontSize: '1rem',
    fontWeight: '700',
    lineHeight: '1.75rem',
    '@media (min-width:992px)': {
        fontSize: '0.875rem',
        lineHeight: '1.5rem',
    },
};

const body1 = {
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.75rem',
    '@media (min-width:992px)': {
        fontSize: '0.875rem',
        // lineHeight: '1.5rem', //Misaligning textfield label
    },
};

const body2 = {
    fontSize: '0.875rem',
    fontWeight: '400',
    lineHeight: '1.5rem',
    '@media (min-width:992px)': {
        fontSize: '0.8125rem',
    },
};

const subtitle1 = {
    fontSize: '0.75rem',
    fontWeight: '400',
    lineHeight: '1.25rem'
};

const typography = {
    fontFamily: [
        'Nunito',
    ].join(','),
    fontSize: 16,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    body1,
    body2,
    subtitle1,
    lmsHeading1: {
        fontSize: h1.fontSize,
        lineHeight: h1.lineHeight,
        fontWeight: 700,
        letterSpacing: '.01875rem',
        '@media (min-width:992px)': {
            fontSize: h1['@media (min-width:992px)'].fontSize,
        },
    },
    lmsCard: {
        background: '#FFF',
        boxShadow: '0 2px 4px rgb(0 0 0 / 12%), 0 0 2px rgb(0 0 0 / 8%)',
        borderRadius: '0.5rem',
        padding: '1.5rem'
    },
};

export default typography;
