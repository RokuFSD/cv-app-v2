import React from "react";
import { useFormContext } from "../../context/FormContext";
import CvPreviewEducation from "./CvPreviewEducation";
import CvPreviewExperience from "./CvPreviewExperience";
import CvPreviewPersonal from "./CvPreviewPersonal";

function CvPreview({ forceShow }) {
  const { personal, experience, education } = useFormContext();
  return (
    <section
      className={`${
        forceShow ? "w-full" : "hidden w-7/12"
      } md:block sticky top-0 lg:w-144`}
    >
      {/* Header */}
      <div className="bg-neutral-800 px-3 flex flex-col justify-center h-24">
        <h2 className="text-neutral-200 text-2xl font-semibold">
          {personal.firstName} {personal.lastName}
        </h2>
        <h3 className="text-neutral-200 text-lg">{personal.title}</h3>
      </div>
      {/* Body */}
      <div className="bg-neutral-200 pl-3 flex autoheight">
        <div className="w-8/12">
          <div>
            <h2 className="text-blue-400 font-semibold">Description</h2>
            <p className="text-sm break-words">{personal.description}</p>
          </div>
          <CvPreviewEducation items={education} />
          <CvPreviewExperience items={experience} />
        </div>
        <CvPreviewPersonal items={personal} />
      </div>
    </section>
  );
}

export default CvPreview;
