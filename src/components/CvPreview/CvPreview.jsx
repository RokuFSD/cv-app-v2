import React from "react";
import { useFormContext } from "../../context/FormContext";

function CvPreview() {
  const { personal, experience, education } = useFormContext();
  return (
    <>
      {/* TODO: Separate this in components */}
      <section className="block md:hidden">
        Can`&apos`t render on this device :(
      </section>
      <section className="hidden md:flex flex-col h-192 w-10/12 lg:w-6/12 xl:w-4/12">
        {/* Header */}
        <div className="bg-neutral-800 h-24 px-3 flex flex-col justify-center">
          <h2 className="text-neutral-200 text-2xl font-semibold">
            {personal.firstName} {personal.lastName}
          </h2>
          <h3 className="text-neutral-200 text-lg">{personal.title}</h3>
        </div>
        <div className="bg-neutral-200 pl-3 flex h-full">
          <div className="w-8/12">
            <div className="h-auto">
              <h2 className="text-blue-400 font-semibold">Description</h2>
              <p className="text-sm break-words">{personal.description}</p>
            </div>
            <div>
              <h2 className="text-blue-400 font-semibold">Experience</h2>
              {experience.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div>
                    <p className="text-sm font-semibold w-40">
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
            <div>
              <h2 className="text-blue-400 font-semibold">Education</h2>
              {education.map((item) => (
                <div key={item.id}>
                  <div>
                    <p>
                      {item.schoolFrom} - {item.schoolTo}
                    </p>
                  </div>
                  <div>
                    <p>
                      {item.universityName}, {item.schoolCity}
                    </p>
                    <p>{item.degree}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Personal Info */}
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
        </div>
      </section>
    </>
  );
}

export default CvPreview;
