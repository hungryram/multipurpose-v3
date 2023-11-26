'use client'
'use client'
import React, { useEffect } from 'react';

interface Props {
  propType: string;
  status: string;
  sort: string;
}

function IhfFeaturedListings({
  propType,
  status,
  sort
}: Props) {
  useEffect(() => {
    const script = document.createElement('script');

    const propertyTypeValue = `"${propType}"`;
    const propStatus = `"${status}"`;
    const propSort = `"${sort}"`;

    script.textContent = `
      document.currentScript.replaceWith(ihfKestrel.render({
		"component": "featuredListingSearchWidget",
		"propertyType": ${propertyTypeValue},
		"status": ${propStatus},
		"sort": ${propSort},
		"resultsPerPage": 15
      }));
    `;

    const existingWidgetDiv = document.getElementById('featuredListings-ihf-widget');
    let widgetDiv;

    if (!existingWidgetDiv) {
      widgetDiv = document.createElement('div');
      widgetDiv.id = 'featuredListings-ihf-widget'; // Add ID to the div
      widgetDiv.className = 'container py-20'; // Add Tailwind CSS classes
    } else {
      widgetDiv = existingWidgetDiv;
    }

    widgetDiv.appendChild(script);

    const containerElement = document.getElementById('mainBody'); // Replace with the actual ID of your container element

    if (containerElement) {
      containerElement.appendChild(widgetDiv);
    } else {
      console.error('Could not find container element with ID: #mainBody');
    }

    return () => {
      document.body.removeChild(widgetDiv); // Remove script on unmount
    };
  }, []);

  return (
    <div>
      {/* Your component's UI content */}
    </div>
  );
}

export default IhfFeaturedListings;
