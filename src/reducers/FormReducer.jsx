import idDate from "../helpers";

const initialForm = {
  personal: {
    firstName: "",
    lastName: "",
    title: "",
    address: "",
    phoneNumber: "",
    email: "",
    description: "",
    photo: "",
  },
  experience: [
    {
      id: idDate(),
      position: "",
      company: "",
      jobCity: "",
      jobFrom: "",
      jobTo: "",
      type: "experience",
    },
  ],
  education: [
    {
      id: idDate(),
      universityName: "",
      schoolCity: "",
      degree: "",
      schoolFrom: "",
      schoolTo: "",
      type: "education",
    },
  ],
};

function formReducer(state, action) {
  switch (action.type) {
    case "ADD_EXPERIENCE": {
      return {
        ...state,
        experience: [
          ...state.experience,
          {
            id: idDate(),
            position: "",
            company: "",
            jobCity: "",
            jobFrom: "",
            jobTo: "",
            type: "experience",
          },
        ],
      };
    }
    case "ADD_EDUCATION": {
      return {
        ...state,
        education: [
          ...state.education,
          {
            id: idDate(),
            universityName: "",
            schoolCity: "",
            degree: "",
            schoolFrom: "",
            schoolTo: "",
            type: "education",
          },
        ],
      };
    }
    case "DELETE_EXPERIENCE": {
      return {
        ...state,
        experience: state.experience.filter((exp) => exp.id !== action.id),
      };
    }

    case "DELETE_EDUCATION": {
      return {
        ...state,
        education: state.education.filter((edu) => edu.id !== action.id),
      };
    }
    default: {
      throw Error("Unexpected action");
    }
  }
}

export { initialForm, formReducer };
