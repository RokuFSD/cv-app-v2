import { formReducer } from "./FormReducer";

const test = {
  experience: [
    {
      id: "idprueba",
    },
  ],
  education: [
    {
      id: "idedu",
      universityName: "",
    },
  ],
};

describe("FormReducer", () => {
  it("should return the initial state", () => {
    expect(formReducer(undefined, {})).toEqual({});
  });
  it("should handle DELETE_EXPERIENCE", () => {
    expect(
      formReducer(test, { type: "DELETE_EXPERIENCE", id: "idprueba" })
    ).toEqual({
      experience: [],
      education: [
        {
          id: "idedu",
          universityName: "",
        },
      ],
    });
  });
  it("should handle UPDATE_EDUCATION", () => {
    expect(
      formReducer(test, {
        type: "UPDATE_EDUCATION",
        groupId: "idedu",
        id: "universityName",
        value: "universityName",
      })
    ).toEqual({
      experience: [
        {
          id: "idprueba",
        },
      ],
      education: [
        {
          id: "idedu",
          universityName: "universityName",
        },
      ],
    });
  });
  it("should handle UPDATE_EXPERIENCE", () => {
    expect(
      formReducer(test, {
        type: "UPDATE_EXPERIENCE",
        groupId: "idprueba",
        id: "jobPlace",
        value: "jobPlace",
      })
    ).toEqual({
      experience: [
        {
          id: "idprueba",
          jobPlace: "jobPlace",
        },
      ],
      education: [
        {
          id: "idedu",
          universityName: "",
        },
      ],
    });
  });
});
