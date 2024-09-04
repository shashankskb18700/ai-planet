import "../Form/Form.css";
import UploadImg from "../../assets/cardimage/add-image.png";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Upload } from "../../assets/icons/bi_image-fill.svg";

const EditForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const editItem = location.state?.editItem;
  let [formDefaultValues, setFormDefaultValues] = useState({
    title: "",
    status: "",
    img: "",
    description: "",
    level: "",
    time: "",
    startDate: "",
    endDate: "",
    id: "",
    image: "",
  });
  console.log(formDefaultValues);

  useEffect(() => {
    const retrieveItem = JSON.parse(localStorage.getItem("lastItem"));
    setFormDefaultValues(retrieveItem);
    setFormValues(retrieveItem);
  }, []);

  formDefaultValues = editItem
    ? { ...formDefaultValues, ...editItem }
    : formDefaultValues;

  const [formValues, setFormValues] = useState(formDefaultValues);

  const [showImage, setShowImage] = useState();
  const [fileName, setFileName] = useState();

  const existingHackathon =
    JSON.parse(localStorage.getItem("hackathons")) || [];

  const { title, status, image, level, time, startDate, endDate, description } =
    formValues;

  const formOnchangeHandle = (e) => {
    e.preventDefault();
    const { name, value, files } = e.target;

    if (name === "image" && files.length > 0) {
      setFileName(value.split("\\").pop());
      const reader = new FileReader();
      const file = files[0];

      reader.onloadend = () => {
        setFormValues({ ...formValues, [name]: reader.result });
        setShowImage(reader.result);
        console.log(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  const formOnSubmitHandler = (e) => {
    const existingHackathonArray = Array.isArray(existingHackathon)
      ? existingHackathon
      : [];

    const newEntry = {
      id: new Date().getTime(),
      ...formValues,
    };
    const existingHackathonNew = [];

    for (let i = 0; i < existingHackathonArray.length; i++) {
      if (existingHackathonArray[i].id != formDefaultValues.id) {
        existingHackathonNew.push(existingHackathonArray[i]);
      }
    }

    const updatedData = [...existingHackathonNew, newEntry];

    localStorage.setItem("hackathons", JSON.stringify(updatedData));
    navigate("/");
  };

  return (
    <div className="form__route">
      <form
        className="form__container"
        onSubmit={formOnSubmitHandler}
        method="POST"
        encType="multipart/form-data"
      >
        <h3 className="form__heading">Challenge details</h3>

        <label className="form__label">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Title of your submission"
          defaultValue={formDefaultValues.title}
          onChange={formOnchangeHandle}
          required
        />

        <label className="form__label">Status</label>
        <input
          type="text"
          name="status"
          defaultValue={formDefaultValues.status}
          onChange={formOnchangeHandle}
          placeholder="active , upcomming ,past"
          required
        />

        <label className="form__label">Level</label>

        <input
          type="text"
          name="level"
          defaultValue={formDefaultValues.level}
          onChange={formOnchangeHandle}
          placeholder="easy , medium , hard"
          required
        />

        <label className="form__label">Description</label>
        <textarea
          className="input__description"
          name="description"
          defaultValue={formDefaultValues.description}
          onChange={formOnchangeHandle}
          placeholder="description."
          required
        ></textarea>

        <label className="form__label">Cover Image</label>

        {showImage ? (
          <label className="form__img--upload uploaded" htmlFor="imageUpload">
            <img
              src={showImage}
              alt="Upload-i"
              className="form__uploaded--img"
            />

            <p className="re-upload__container">
              <Upload className="re-upload" />
              Change image
            </p>
          </label>
        ) : (
          <label className="form__img--upload upload" htmlFor="imageUpload">
            <input
              type="file"
              accept="image/*"
              id="imageUpload"
              name="image"
              defaultValue={image}
              onChange={formOnchangeHandle}
            />
            <img
              src={formDefaultValues.image}
              alt="Upload-i"
              className="form__img"
            />
          </label>
        )}

        <div className="dates__container">
          <div className="form__date">
            <label htmlFor="dateInput" className="form__label">
              Start Date
            </label>
            <input
              className="input__date"
              type="date"
              id="dateInput"
              name="startDate"
              defaultValue={formDefaultValues.startDate}
              placeholder="Select a Date"
              onChange={formOnchangeHandle}
              required
            />
          </div>
          <div className="form__date">
            <label htmlFor="dateInput" className="form__label">
              End Date
            </label>
            <input
              className="input__date"
              type="date"
              id="dateInput"
              name="endDate"
              defaultValue={formDefaultValues.endDate}
              placeholder="Select a Date"
              onChange={formOnchangeHandle}
              required
            />
          </div>
        </div>

        <div className="btn__container">
          <button className="form__button" type="submit">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
