import React from 'react';

function CvPreviewEducation({ items }) {
  return (
    <div>
      <h2 className="text-blue-400 font-semibold">Education</h2>
      {items.map((item) => (
        <div key={item.id} className="flex gap-4">
          <div>
            <p className="text-sm font-semibold w-44">
              {item.schoolFrom} - {item.schoolTo}
            </p>
          </div>
          <div className="text-sm h-20">
            <p className="font-semibold">
              {item.universityName}, {item.schoolCity}
            </p>
            <p>{item.degree}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default React.memo(CvPreviewEducation);
