const ITEM_DATA = [
    {
        id: 1,
        category:'Produce',
        title: 'Fresh Vegetables',
        items: [
            {
                id: 2,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_117a7a2d-b040-4559-befb-c769728e5545.png',
                priceview: '$2.99',
                type: 'Organic',
                name: 'Bako Sweet Organic Sweet Potato Steam in Bag',
                weight: '14 oz',
                cartprice: '2.99'
            },
            {
                id: 3,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_e2dd6bc6-09e0-4ac2-b298-ad6ac2e6d5d3.png',
                priceview: '$0.99',
                type: 'Organic',
                name: 'Organic Cilantro',
                weight: '1 ct',
                cartprice: '0.99'
            },
            {
                id: 4,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_492da442-8126-49f8-bb04-dfe8c6aca507.png',
                priceview: '$0.99',
                type: 'Organic',
                name: 'Organic Green Onions',
                weight: '5.5 oz bunch',
                cartprice: '0.99'
            },
            {
                id: 5,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_be2f00a6-7583-491e-9b40-a02a0df8fa58.png',
                priceview: '$1.50',
                name: 'Red Bell Pepper',
                cartprice: '1.50'
            },
            {
                id: 6,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_9d48596e-c096-4f42-a4b5-4cf89fefe15f.png',
                priceview: '$0.99',
                name: 'Cucumber',
                cartprice: '0.99'

            },
            {
                id: 7,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_ebb63ac7-2c95-4e6f-9559-e1680127092f.png',
                priceview: '$1.57 each (est.)',
                name: 'Broccoli Crown',
                weight: '$1.99/lb',
                cartprice: '1.57'
            },
            {
                id: 8,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_83af50a3-68c1-4c24-94e9-1a2f8f1cab6d.png',
                priceview: '$1.56 each (est.)',
                name: 'Red onion',
                weight: '$1.79/lb',
                cartprice: '1.56'
            },
            {
                id: 9,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_ab3bd925-d54c-4a4b-8c9f-939b1af0c0a6.png',
                priceview: '$1.03 each (est.)',
                name: 'Yellow onion',
                weight: '$1.49/lb',
                cartprice: '1.03'
            },
            {
                id: 10,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_754a9eb0-46bd-4ec6-9061-2e4c7ef383d5.png',
                priceview: '$0.64 each (est.)',
                name: 'Zucchini Squash',
                weight: '$1.99/lb',
                cartprice: '1.99'
            }
        ]
    },

    {
        id: 11,
        title: 'Fresh Fruits',
        category:'Produce',
        items: [
            {
                id: 12,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_6e5c6fcb-71c0-4eef-936b-94ceff56a81c.png',
                priceview: '$0.36 each (est.)',
                type: 'Organic',
                name: 'Organic Banana',
                weight: '$0.89/lb',
                cartprice: '0.36'
            },
            {
                id: 13,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_bca88ebd-4e29-457a-875d-415c3d8cf3d5.png',
                priceview: '$0.99',
                name: 'Hass Avocado',
                weight: '1 ct',
                cartprice: '0.99'
            },
            {
                id: 14,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_6e5c6fcb-71c0-4eef-936b-94ceff56a81c.png',
                priceview: '$0.34',
                name: 'Banana',
                weight: '0.79/lb',
                cartprice: '0.34'
            },
            {
                id: 15,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_954a15b8-0a19-4f8f-8bf3-1dd815bf25eb.png',
                priceview: '$3.50',
                type: 'Organic',
                name: 'Organic Blueberries',
                weight: '6 oz Container',
                cartprice: '3.50'
            },
            {
                id: 16,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_203b32b5-6408-49ff-b339-dff33c065b72.png',
                priceview: '$3.99',
                name: 'Strawberries',
                weight: '1 lb container',
                cartprice: '3.99'

            },
            {
                id: 17,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_66c22fdf-0e92-48de-b3d4-06c14455e630.png',
                priceview: '$3.49',
                name: 'Mandarins Bag',
                weight: '2lb',
                cartprice: '3.49'
            },
            {
                id: 18,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_371621b0-9d1a-471c-b3cc-66f8293d80d7.png',
                priceview: '$0.50',
                name: 'Lemon',
                cartprice: '0.50'
            },
            {
                id: 19,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_7b163074-0594-4c39-8da8-f5df568a649a.png',
                priceview: '$0.50',
                name: 'Lime',
                cartprice: '0.50'
            },
            {
                id: 20,
                icon: 'https://www.instacart.com/image-server/197x197/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_ff38ed1c-e753-4aa3-b614-a4cddada2fec.png',
                priceview: '$1.12 each(est.)',
                name: 'Honeycrisp Apple',
                weight: '$2.79/lb',
                cartprice: '1.12'
            },
            {
                id: 21,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_6e5c6fcb-71c0-4eef-936b-94ceff56a81c.png',
                priceview: '$0.36 each (est.)',
                type: 'Organic',
                name: 'Organic Banana',
                weight: '$0.89/lb',
                cartprice: '0.36'
            },
            {
                id: 22,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_bca88ebd-4e29-457a-875d-415c3d8cf3d5.png',
                priceview: '$0.99',
                name: 'Hass Avocado',
                weight: '1 ct',
                cartprice: '0.99'
            },
            {
                id: 23,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_6e5c6fcb-71c0-4eef-936b-94ceff56a81c.png',
                priceview: '$0.34',
                name: 'Banana',
                weight: '0.79/lb',
                cartprice: '0.34'
            },
            {
                id: 24,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_954a15b8-0a19-4f8f-8bf3-1dd815bf25eb.png',
                priceview: '$3.50',
                type: 'Organic',
                name: 'Organic Blueberries',
                weight: '6 oz Container',
                cartprice: '3.50'
            },
            {
                id: 25,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_203b32b5-6408-49ff-b339-dff33c065b72.png',
                priceview: '$3.99',
                name: 'Strawberries',
                weight: '1 lb container',
                cartprice: '3.99'

            },
            {
                id: 26,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_66c22fdf-0e92-48de-b3d4-06c14455e630.png',
                priceview: '$3.49',
                name: 'Mandarins Bag',
                weight: '2lb',
                cartprice: '3.49'
            },
            {
                id: 27,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_371621b0-9d1a-471c-b3cc-66f8293d80d7.png',
                priceview: '$0.50',
                name: 'Lemon',
                cartprice: '0.50'
            },
            {
                id: 28,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_7b163074-0594-4c39-8da8-f5df568a649a.png',
                priceview: '$0.50',
                name: 'Lime',
                cartprice: '0.50'
            },
            {
                id: 29,
                icon: 'https://www.instacart.com/image-server/197x197/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_ff38ed1c-e753-4aa3-b614-a4cddada2fec.png',
                priceview: '$1.12 each(est.)',
                name: 'Honeycrisp Apple',
                weight: '$2.79/lb',
                cartprice: '1.12'
            }
        ]
    },

    {
        id: 30,
        title: 'Snacks',
        category:'Produce',
        items: [
            {
                id: 31,
                icon: 'https://www.instacart.com/image-server/197x197/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_6a70a9e1-fdee-4dfd-a508-bcce5cf331e9.png',
                priceview: '$2.50',
                type: 'Gluten-Free',
                name: 'Love Good Fats Mint Chocolate Chip Snack Bar',
                weight: '1.38 oz',
                cartprice: '2.50'
            },
            {
                id: 32,
                icon: 'https://www.instacart.com/image-server/197x197/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_095a9d8d-9b4c-4616-8b1f-732a3d129ec8.png',
                priceview: '$2.49',
                type: 'Organic',
                name: 'Sprouts Organic Sea Salt Blue Corn Tortilla Chips',
                weight: '8 oz',
                cartprice: '2.49'
            },
            {
                id: 33,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_492da442-8126-49f8-bb04-dfe8c6aca507.png',
                priceview: '$3.99',
                type: 'Gluten-Free',
                name: 'Casa Sanchez Tortilla Chips Thin & Light De',
                weight: '14 oz',
                cartprice: '3.99'
            },
            {
                id: 34,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c5e79774-5fa9-4a63-a9f0-327bf652e38a.png',
                priceview: '$5.99',
                type: 'Organic Gulten-Free',
                name: 'gimMe Organic Sea Salt Roasted Seaweed 6 Pack',
                weight: '6 x 0.17 oz',
                cartprice: '5.99'
            },
            {
                id: 35,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_e71a9ab4-572f-4e5e-a5be-355d101c1853.png',
                priceview: '$4.79',
                type: 'Organic Gulten-Free',
                name: 'Annie Organic Cheddar Chessy Puffs',
                cartprice: '4.79'

            },
            {
                id: 36,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_1de753de-c1ce-4ba8-82e3-b89ef3811a83.png',
                priceview: '$2.50',
                type: 'Gulten-Free',
                name: 'Angie Boom Chicka',
                weight: '7 oz',
                cartprice: '2.50'
            },
            {
                id: 37,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_9228ed5a-c112-4e68-b064-af71b59d552b.png',
                priceview: '$3.29',
                type: 'Gulten-Free',
                name: 'Boulder Canyon Avocado Oil Cut Chips',
                weight: '5.25 oz',
                cartprice: '3.29'
            },
            {
                id: 38,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_7e10678e-a98c-4661-8c35-056577e53be2.png',
                priceview: '$5.29',
                type: 'Gulten-Free',
                name: 'Simple Mills Almond Flour Fine Ground Sea Salt Crackers',
                weight: '4.25oz',
                cartprice: '5.29'
            },
            {
                id: 39,
                icon: 'https://www.instacart.com/image-server/197x197/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_6882dfb5-1899-4fda-b5d7-e426da6a43a0.png',
                priceview: '$2.29',
                name: 'Sprouts White Corn Tortilla Chips',
                weight: '12oz',
                cartprice: '2.29'
            }
        ]
    },

    {

        id: 40,
        title: 'Baking & Cooking',
        items: [
            {
                id: 41,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_6ea55692-9b00-4ac9-b3ee-2da91e5e0e9d.png',
                priceview: '$6.99',
                type: 'Organic',
                name: 'Noble Made by The New Primal Organic Classic BBQ Seasoning',
                weight: '2.5 oz',
                cartprice: '6.99'
            },
            {
                id: 42,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_af7cfcae-fe4c-405e-ba12-561a5f723dac.png',
                priceview: '$13.99',
                name: 'California Olive Ranch Global Blend Medium Extra Virgin Olive Oil',
                weight: '25.4fl oz',
                cartprice: '13.99'
            },
            {
                id: 43,
                icon: 'instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_b1d58b44-298c-4cbb-ac61-11baecd2b23b.png',
                priceview: '$1.29',
                type: 'Organic',
                name: 'Sprouts Organic Taco Seasoning Mix',
                weight: '1 oz',
                cartprice: '1.29'
            },
            {
                id: 44,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_fddb4f7f-0458-45d5-86ab-dd1c707b6e83.png',
                priceview: '$2.99',
                name: 'Kikkoman Panko Bread Crumbs',
                weight: '8 oz',
                cartprice: '2.99'
            },
            {
                id: 45,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_8663b25a-ff14-496e-9406-fdb7b2e96a46.png',
                priceview: '$9.99',
                name: 'Sprouts Extra Virgin Olive oil',
                cartprice: '9.99'

            },
            {
                id: 46,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_7476846d-082b-40b5-8d62-ff3adf407bc5.png',
                priceview: '$0.99',
                name: 'Sprouts 100% Pure Baking Soda',
                weight: '16 oz',
                cartprice: '0.99'
            },
            {
                id: 47,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d08ceda5-4b34-4dc6-b98d-94bffe20a6b4.png',
                priceview: '$4.99',
                type: 'Organic',
                name: 'Bragg Organic Apple Cider Vunegar',
                weight: '32 fl oz',
                cartprice: '4.99'
            },
            {
                id: 48,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d9d1ed20-c1db-4810-9362-ff9427d25949.png',
                priceview: '$1.29/lb',
                name: 'White Granulated Sugar',
                weight: '$0.08/oz',
                cartprice: '1.29'
            },
            {
                id: 49,
                icon: 'https://www.instacart.com/image-server/394x394/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_568943e2-f774-43cd-99a4-197dedd01a74.png',
                priceview: '$2.29',
                name: 'Sprouts Unbeachaed All Purpose Flour',
                weight: '5lb',
                cartprice: '2.29'
            }
        ]
    },

];

export default ITEM_DATA;