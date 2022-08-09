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
    case "UPDATE_PERSONAL": {
      return {
        ...state,
        personal: {
          ...state.personal,
          [action.id]: action.value,
        },
      };
    }
    case "UPDATE_EXPERIENCE": {
      const indexToUpdate = state.experience.findIndex(
        (e) => e.id === action.groupId
      );
      const newExperience = [...state.experience];
      newExperience[indexToUpdate] = {
        ...newExperience[indexToUpdate],
        [action.id]: action.value,
      };

      return {
        ...state,
        experience: newExperience,
      };
    }

    case "UPDATE_EDUCATION": {
      const indexToUpdate = state.education.findIndex(
        (e) => e.id === action.groupId
      );
      const newEducation = [...state.education];
      newEducation[indexToUpdate] = {
        ...newEducation[indexToUpdate],
        [action.id]: action.value,
      };

      return {
        ...state,
        education: newEducation,
      };
    }
    default: {
      return { ...state };
    }
  }
}

export { initialForm, formReducer };
