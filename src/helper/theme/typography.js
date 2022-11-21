import palette from "./palette";
import theme from "./theme";

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

//Kajabi Body
const body1 = {
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.75rem',
    '@media (min-width:992px)': {
        fontSize: '0.875rem',
        // lineHeight: '1.5rem', //Misaligning textfield label
    },
};

//Kajabi Body Sm
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

/*Custom*/
const lmsHeading5 = {
    fontSize: h5.fontSize,
    lineHeight: h5.lineHeight,
    fontWeight: 600,
    letterSpacing: '.01875rem',
    '@media (min-width:992px)': {
        fontSize: h5['@media (min-width:992px)'].fontSize,

    },
}

const lmsHeading6 = {
    fontSize: h6.fontSize,
    lineHeight: h6.lineHeight,
    fontWeight: 600,
    letterSpacing: '.01875rem',
    '@media (min-width:992px)': {
        fontSize: h6['@media (min-width:992px)'].fontSize,
    },
}
const lmsHeadingBody2= {
    fontSize: [body2.fontSize, '!important'],
    lineHeight: body2.lineHeight,
    fontWeight: 400,
    letterSpacing: '.0125rem',
    '@media (min-width:992px)': {
        fontSize: body2['@media (min-width:992px)'].fontSize,
    },
}

const typography = {
    fontFamily: [
        'Inter',
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
};

export default typography;
