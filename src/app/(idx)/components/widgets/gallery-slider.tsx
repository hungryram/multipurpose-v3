'use client'
import React, { useEffect } from 'react';

interface Props {
    status: string;
    effect: string;
  }


function IhfGallerySlider({
    status,
    effect
}: Props) {
  useEffect(() => {
    const script = document.createElement('script');

    const propStatus = `"${status}"`;
    const galleryEffect = `"${effect}"`;


    script.textContent = `
      document.currentScript.replaceWith(ihfKestrel.render({
		"component": "gallerySliderWidget",
		"rows": 1,
		"navigation": true,
		"nav": "bottom",
		"auto": true,
		"maxResults": 25,
		"status": ${propStatus},
		"featured": true,
		"effect": ${galleryEffect},
      }));
    `;

    const existingWidgetDiv = document.getElementById('ihf-gallerySlider-widget');
    let widgetDiv;

    if (!existingWidgetDiv) {
      widgetDiv = document.createElement('div');
      widgetDiv.id = 'ihf-gallerySlider-widget'; // Add ID to the div
      widgetDiv.className = 'container py-20'; // Add Tailwind CSS classes
    } else {
      widgetDiv = existingWidgetDiv;
    }

    widgetDiv.appendChild(script);

    const containerElement = document.getElementById('mainBody'); // Replace with the actual ID of your container element

    if (containerElement) {
      containerElement.appendChild(widgetDiv);
    } else {
      console.error('Could not find container element with ID: #ihf-gallerySlider-widget');
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

export default IhfGallerySlider;
