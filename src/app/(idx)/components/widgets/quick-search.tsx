'use client'
'use client'
import React, { useEffect } from 'react';

function IhfQuickSearch({
  qsTypeSanity
}: {
  qsTypeSanity: string
}) {
  useEffect(() => {
    const script = document.createElement('script');
    const qsType = `"${qsTypeSanity}"`;

    script.textContent = `
      document.currentScript.replaceWith(ihfKestrel.render({
		"component": "quickSearchWidget",
		"style": ${qsType}
      }));
    `;

    const existingWidgetDiv = document.getElementById('quicksearch-ihf-widget');
    let widgetDiv;

    if (!existingWidgetDiv) {
      widgetDiv = document.createElement('div');
      widgetDiv.id = 'quicksearch-ihf-widget'; // Add ID to the div
      widgetDiv.className = 'container py-20'; // Add Tailwind CSS classes
    } else {
      widgetDiv = existingWidgetDiv;
    }

    widgetDiv.appendChild(script);

    const containerElement = document.getElementById('mainBody'); // Replace with the actual ID of your container element

    if (containerElement) {
      containerElement.appendChild(widgetDiv);
    } else {
      console.error('Could not find container element with ID: #container-above-footer');
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

export default IhfQuickSearch;
