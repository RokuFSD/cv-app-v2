import React from "react";

function CvPreviewPersonal({ personal }) {
  return (
    <aside className="w-4/12 min-h-full bg-neutral-300">
      <img src="" alt="profile" />
      <div className="flex flex-col mx-2 break-words flex">
        <h2 className="text-blue-400 font-semibold">Personal Details</h2>
        <h2 className="font-semibold text-sm">Address</h2>
        <p className="text-xs mb-2">{personal.address}</p>
        <h2 className="font-semibold text-sm">Phone Number</h2>
        <p className="text-xs mb-2">{personal.phoneNumber}</p>
        <h2 className="font-semibold text-sm">Email</h2>
        <p className="text-xs mb-2">{personal.email}</p>
      </div>
    </aside>
  );
}

export default React.memo(CvPreviewPersonal);
