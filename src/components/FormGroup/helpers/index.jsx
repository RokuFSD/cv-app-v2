const getInputs = (type) => {
  switch (type) {
    case "education":
      return [
        {
          id: "universityName",
          label: "University Name",
          type: "text",
          required: true,
        },
        {
          id: "schoolCity",
          label: "School City",
          type: "text",
          required: true,
        },
        {
          id: "degree",
          label: "Degree",
          type: "text",
          required: true,
        },
        {
          id: "schoolFrom",
          label: "School From",
          type: "date",
          required: true,
        },
        {
          id: "schoolTo",
          label: "School To",
          type: "date",
          required: true,
        },
      ];
    case "experience":
      return [
        {
          id: "position",
          label: "Position",
          type: "text",
          required: true,
        },
        {
          id: "company",
          label: "Company",
          type: "text",
          required: true,
        },
        {
          id: "jobCity",
          label: "Job City",
          type: "text",
          required: true,
        },
        {
          id: "jobFrom",
          label: "Job From",
          type: "date",
          required: true,
        },
        {
          id: "jobTo",
          label: "Job To",
          type: "date",
          required: true,
        },
      ];
    case "personal":
      return [
        {
          id: "firstName",
          label: "First Name",
          type: "text",
          required: true,
        },
        {
          id: "lastName",
          label: "Last Name",
          type: "text",
          required: true,
        },
        {
          id: "title",
          label: "Title",
          type: "text",
          required: true,
        },
        {
          id: "address",
          label: "Address",
          type: "text",
          required: true,
        },
        {
          id: "phoneNumber",
          label: "Phone Number",
          type: "text",
          required: true,
        },
        {
          id: "email",
          label: "Email",
          type: "email",
          required: true,
        },
        {
          id: "description",
          label: "Description",
          type: "textarea",
        },
        {
          id: "photo",
          label: "Photo",
          type: "file",
        },
      ];
    default:
      return [];
  }
};

export default getInputs;
