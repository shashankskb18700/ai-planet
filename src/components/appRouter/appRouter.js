import { Routes, Route } from "react-router-dom";

import Home from "../home/home";
import Form from "../Form/Form";
import Details from "../details/details";
import EditForm from "../editForm/editForm";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>

      <Route path="/create-challenge" element={<Form></Form>}></Route>
      <Route path="/details" element={<Details></Details>}></Route>
      <Route path="/edit" element={<EditForm></EditForm>}></Route>
    </Routes>
  );
};

export default AppRouter;
