'use client'
import React, { useEffect } from 'react';

function IhfRegistrationFormWidget({
    redirect
}: {
    redirect: string
}) {
  useEffect(() => {
    const script = document.createElement('script');
    const redirectPage = `"${redirect}"`;


    script.textContent = `
      document.currentScript.replaceWith(ihfKestrel.render({
		"component": "registrationFormWidget",
		"redirectUrl": ${redirectPage},
		"buttonText": "Submit"
      }));
    `;

    const existingWidgetDiv = document.getElementById('registrationForm-ihf-widget');
    let widgetDiv;

    if (!existingWidgetDiv) {
      widgetDiv = document.createElement('div');
      widgetDiv.id = 'registrationForm-ihf-widget'; // Add ID to the div
      widgetDiv.className = 'container py-20'; // Add Tailwind CSS classes
    } else {
      widgetDiv = existingWidgetDiv;
    }

    widgetDiv.appendChild(script);

    const containerElement = document.getElementById('mainBody'); // Replace with the actual ID of your container element

    if (containerElement) {
      containerElement.appendChild(widgetDiv);
    } else {
      console.error('Could not find container element with ID: #registrationForm-ihf-widget');
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

export default IhfRegistrationFormWidget;
