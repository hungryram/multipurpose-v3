'use client'
import HeaderSection from '@/app/(site)/components/templates/header-section';
import React, { useEffect } from 'react';

interface Props {
    id: string;
}

function IhfMarketWidget({
    id
}: Props) {
  useEffect(() => {
    const script = document.createElement('script');
    const propID = `"${id}"`;

    script.textContent = `
      document.currentScript.replaceWith(ihfKestrel.render({
		"component": "marketReportWidget",
		"id": ${propID},
		"marketReportTypeId": 1
      }));
    `;

    const existingWidgetDiv = document.getElementById('market-ihf-widget');
    let widgetDiv;

    if (!existingWidgetDiv) {
      widgetDiv = document.createElement('div');
      widgetDiv.id = 'market-ihf-widget'; // Add ID to the div
      widgetDiv.className = 'container py-20'; // Add Tailwind CSS classes
    } else {
      widgetDiv = existingWidgetDiv;
    }

    widgetDiv.appendChild(script);

    const containerElement = document.getElementById('mainBody'); // Replace with the actual ID of your container element

    if (containerElement) {
      containerElement.appendChild(widgetDiv);
    } else {
      console.error('Could not find container element with ID: #market-ihf-widget');
    }

    return () => {
      document.body.removeChild(widgetDiv); // Remove script on unmount
    };
  }, []);

  return (
    <>
      <div>
        {/* Your component's UI content */}
      </div>
    </>
  );
}

export default IhfMarketWidget;
