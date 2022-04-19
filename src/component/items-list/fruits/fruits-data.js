const FRUIT_DATA = [
    {
        id:10,
        icon:'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_6e5c6fcb-71c0-4eef-936b-94ceff56a81c.png',
        priceview: '$0.36 each (est.)',
        type:'Organic',
        name: 'Organic Banana',
        weight: '$0.89/lb',
        cartprice:'0.36'
    },
    {
        id:11,
        icon:'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_bca88ebd-4e29-457a-875d-415c3d8cf3d5.png',
        priceview: '$0.99',
        name: 'Hass Avocado',
        weight: '1 ct',
        cartprice:'0.99'
    },
    {
        id:12,
        icon:'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_6e5c6fcb-71c0-4eef-936b-94ceff56a81c.png',
        priceview: '$0.34',
        name: 'Banana',
        weight: '0.79/lb',
        cartprice:'0.34'
    },
    {
        id:13,
        icon:'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_954a15b8-0a19-4f8f-8bf3-1dd815bf25eb.png',
        priceview: '$3.50',
        type:'Organic',
        name: 'Organic Blueberries',
        weight: '6 oz Container',
        cartprice:'3.50'
    },
    {
        id:14,
        icon:'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_203b32b5-6408-49ff-b339-dff33c065b72.png',
        priceview: '$3.99',
        name: 'Strawberries',
        weight: '1 lb container',
        cartprice:'3.99'
      
    },
    {
        id:15,
        icon:'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_66c22fdf-0e92-48de-b3d4-06c14455e630.png',
        priceview: '$3.49',
        name: 'Mandarins Bag',
        weight: '2lb',
        cartprice:'3.49'
    },
    {
        id:16,
        icon:'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_371621b0-9d1a-471c-b3cc-66f8293d80d7.png',
        priceview: '$0.50',
        name: 'Lemon',
        cartprice:'0.50'
    },
    {
        id:17,
        icon:'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_7b163074-0594-4c39-8da8-f5df568a649a.png',
        priceview: '$0.50',
        name: 'Lime',
        cartprice:'0.50'
    },
    {
        id:18,
        icon:'https://www.instacart.com/image-server/197x197/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_ff38ed1c-e753-4aa3-b614-a4cddada2fec.png',
        priceview: '$1.12 each(est.)',
        name: 'Honeycrisp Apple',
        weight: '$2.79/lb',
        cartprice:'1.12'
    },



    {
        id:19,
        icon:'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_6e5c6fcb-71c0-4eef-936b-94ceff56a81c.png',
        priceview: '$0.36 each (est.)',
        type:'Organic',
        name: 'Organic Banana',
        weight: '$0.89/lb',
        cartprice:'0.36'
    },
    {
        id:20,
        icon:'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_bca88ebd-4e29-457a-875d-415c3d8cf3d5.png',
        priceview: '$0.99',
        name: 'Hass Avocado',
        weight: '1 ct',
        cartprice:'0.99'
    },
    {
        id:21,
        icon:'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_6e5c6fcb-71c0-4eef-936b-94ceff56a81c.png',
        priceview: '$0.34',
        name: 'Banana',
        weight: '0.79/lb',
        cartprice:'0.34'
    },
    {
        id:13,
        icon:'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_954a15b8-0a19-4f8f-8bf3-1dd815bf25eb.png',
        priceview: '$3.50',
        type:'Organic',
        name: 'Organic Blueberries',
        weight: '6 oz Container',
        cartprice:'3.50'
    },
    {
        id:22,
        icon:'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_203b32b5-6408-49ff-b339-dff33c065b72.png',
        priceview: '$3.99',
        name: 'Strawberries',
        weight: '1 lb container',
        cartprice:'3.99'
      
    },
    {
        id:15,
        icon:'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_66c22fdf-0e92-48de-b3d4-06c14455e630.png',
        priceview: '$3.49',
        name: 'Mandarins Bag',
        weight: '2lb',
        cartprice:'3.49'
    },
    {
        id:23,
        icon:'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_371621b0-9d1a-471c-b3cc-66f8293d80d7.png',
        priceview: '$0.50',
        name: 'Lemon',
        cartprice:'0.50'
    },
    {
        id:24,
        icon:'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_7b163074-0594-4c39-8da8-f5df568a649a.png',
        priceview: '$0.50',
        name: 'Lime',
        cartprice:'0.50'
    },
    {
        id:25,
        icon:'https://www.instacart.com/image-server/197x197/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_ff38ed1c-e753-4aa3-b614-a4cddada2fec.png',
        priceview: '$1.12 each(est.)',
        name: 'Honeycrisp Apple',
        weight: '$2.79/lb',
        cartprice:'1.12'
    }
];

export default FRUIT_DATA;