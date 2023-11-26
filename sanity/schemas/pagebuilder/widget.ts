import { defineType } from "sanity";

export default defineType({
    title: 'Widget',
    name: 'widget',
    type: 'object',
    fields: [
        {
            title: 'Widget Type',
            name: 'widgetType',
            type: 'string',
            options: {
                list: [
                    { title: 'Contact Form', value: 'contactForm' },
                    { title: 'Featured Listings', value: 'featuredListings' },
                    { title: 'Gallery Slider', value: 'gallerySlider'},
                    { title: 'Listing Search', value: 'listingSearch' },
                    { title: 'Listings', value: 'listings' },
                    { title: 'Market', value: 'market' },
                    { title: 'Market Index', value: 'marketIndex' },
                    { title: 'Property Organizer', value: 'propOrganizer' },
                    { title: 'Quick Search', value: 'quickSearch' },
                    { title: 'Registration Form', value: 'registrationForm' },
                    { title: 'Sell My House', value: 'sellMyHouse' },
                ]
            }
        },

    ],
})