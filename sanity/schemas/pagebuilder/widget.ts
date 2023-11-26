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
                    { title: 'Gallery Slider', value: 'gallerySlider' },
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
        {
            title: 'Property Type',
            name: 'propType',
            type: 'string',
            hidden: ({ parent }) => parent?.widgetType !== "featuredListings" && parent?.widgetType !== 'listings',
            options: {
                list: [
                    { title: 'House', value: 'SFR' },
                    { title: 'Condo', value: 'CND' },
                    { title: 'Lots/Land', value: 'LL' },
                    { title: 'Multi-Unit', value: 'RI' },
                    { title: 'Mobile Home', value: 'MH' },
                    { title: 'Rental', value: 'RNT' },
                    { title: 'Commercial', value: 'COM' },
                    { title: 'Farm', value: 'FRM' },
                    { title: 'Residential', value: 'RES' },
                ]
            }
        },
        {
            title: 'Status',
            name: 'status',
            type: 'string',
            hidden: ({ parent }) => parent?.widgetType !== "listings" && parent?.widgetType !== 'gallerySlider' && parent?.widgetType !== 'featuredListings',
            options: {
                list: [
                    { title: 'Active', value: 'active' },
                    { title: 'Sold', value: 'sold' },
                ]
            }
        },
        {
            title: 'Sort',
            name: 'sort',
            type: 'string',
            hidden: ({ parent }) => parent?.widgetType !== "featuredListings" && parent?.widgetType !== 'listings',
            options: {
                list: [
                    { title: 'Price (High to Low)', value: 'pd' },
                    { title: 'Price (Low to High)', value: 'pa' },
                    { title: 'Status', value: 'st' },
                    { title: 'City', value: 'cn' },
                    { title: 'Listing Date', value: 'ds' },
                    { title: 'Type/Price Descending', value: 'lpd' },
                    { title: 'Listing Number', value: 'ln' },
                ]
            }
        },
        {
            title: 'Quicksearch Type',
            name: 'qsType',
            type: 'string',
            hidden: ({ parent }) => parent?.widgetType !== "quickSearch",
            options: {
                list: [
                    { title: 'Universal', value: 'universal' },
                    { title: 'Horizontal', value: 'horizontal' },
                    { title: 'Vertical', value: 'vertical' },
                    { title: 'Two Line', value: 'twoline' },
                ]
            }
        },
        {
            title: 'Effect',
            name: 'effect',
            type: 'string',
            hidden: ({ parent }) => parent?.widgetType !== "gallerySlider",
            options: {
                list: [
                    { title: 'Slide', value: 'slide' },
                    { title: 'Fade', value: 'fade' },

                ]
            }
        },
        {
            title: 'ID',
            name: 'Id',
            type: 'string',
            description: 'Found in Ihomefinder Dashboard. Contact your web designer for help',
            hidden: ({ parent }) => parent?.widgetType !== "listings" && parent?.widgetType !== 'market',
        },
        {
            title: 'Redirect URL',
            name: 'redirectUrl',
            type: 'string',
            description: 'Link to success page',
            hidden: ({ parent }) => parent?.widgetType !== "registrationForm",
        }
    ],
})