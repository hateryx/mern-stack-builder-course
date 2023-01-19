import { FrontRow, Alert } from "../../component";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const AddJob = () => {
  const {
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    }
    console.log("Create Job");
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}: ${value}`);
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit job" : "add job"}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          {/* position */}
          <FrontRow
            type="text"
            name="position"
            value={position}
            changeHandler={handleJobInput}
          />

          {/* company */}
          <FrontRow
            type="text"
            name="company"
            value={company}
            changeHandler={handleJobInput}
          />

          {/* location */}
          <FrontRow
            type="text"
            labelText="Job Location"
            name="jobLocation"
            value={jobLocation}
            changeHandler={handleJobInput}
          />
          {/* job type */}
          <div className="form-row">
            <label htmlFor="jobType" className="form-label">
              job type
            </label>
            <select
              name="jobType"
              value={jobType}
              changeHandler={handleJobInput}
              className="form-select"
            >
              {jobTypeOptions.map((itemValue, index) => {
                return (
                  <option key={index} value={itemValue}>
                    {itemValue}
                  </option>
                );
              })}
            </select>
          </div>
          {/* job status */}
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
