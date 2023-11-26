'use client'
import React, { useEffect } from 'react';

function IhfPropertyOrganizerWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.textContent = `
      document.currentScript.replaceWith(ihfKestrel.render({
		"component": "loginWidget",
		"style": "vertical"
      }));
    `;

    const existingWidgetDiv = document.getElementById('PropertyOrganizer-ihf-widget');
    let widgetDiv;

    if (!existingWidgetDiv) {
      widgetDiv = document.createElement('div');
      widgetDiv.id = 'PropertyOrganizer-ihf-widget'; // Add ID to the div
      widgetDiv.className = 'container py-20'; // Add Tailwind CSS classes
    } else {
      widgetDiv = existingWidgetDiv;
    }

    widgetDiv.appendChild(script);

    const containerElement = document.getElementById('mainBody'); // Replace with the actual ID of your container element

    if (containerElement) {
      containerElement.appendChild(widgetDiv);
    } else {
      console.error('Could not find container element with ID: #PropertyOrganizer-ihf-widget');
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

export default IhfPropertyOrganizerWidget;
