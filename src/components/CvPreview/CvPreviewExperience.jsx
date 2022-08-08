import React from "react";

function CvPreviewExperience({ items }) {
  return (
    <div>
      <h2 className="text-blue-400 font-semibold">Experience</h2>
      {items.map((item) => (
        <div key={item.id} className="flex gap-4">
          <div>
            <p className="text-sm font-semibold w-44">
              {item.jobFrom} - {item.jobTo}
            </p>
          </div>
          <div className="text-sm h-20">
            <p className="font-semibold">{item.position}</p>
            <p>
              {item.company}, {item.jobCity}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default React.memo(CvPreviewExperience);
