import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addeventpage from "./components/Addeventpage";
import Navbar from "./components/Navbar";
import Firstpage from "./components/Firstpage";
import About from "./components/About";
import Categories from "./components/Categories";
import Event from "./components/Event";
import Footer from "./components/Footer";
import Eventpage from "./components/Eventpage";
import Plan from "./components/Plan";
import About2 from "./components/About2";
import SubPlan from "./components/Suscription/SubPlan";
import ModeratorProfile from "./components/ModeratorProfile";
import MyProfile from "./components/MyProfile";
import BasicInfo from "./components/BasicInfo";
import BillingInformation from "./components/BillingInformation";
import BookmarkedEvent from "./components/BookmarkedEvent";
import SingleEventPage from "./components/SingleEventPage";
import MyProfileEvent from "./components/MyProfileEvent";
const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Firstpage />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/about2" element={<About2 />} />
          {/* <Route path="/categories" element={<Categories />} /> */}
          {/* <Route path="/event" element={<Event />} /> */}
          <Route path="/addevent" element={<Addeventpage />} />
          <Route path="/events" element={<Eventpage />} />
          {/* <Route path="/plan" element={<Plan />} /> */}
          {/* <Route path="/sub-plan" element={<SubPlan />} /> */}
          <Route path="/moderator" element={<ModeratorProfile />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/bill" element={<BillingInformation />} />
          <Route path="/bookmark" element={<BookmarkedEvent />} />
          <Route path="/basicinfo" element={<BasicInfo />} /> 
          <Route path="/single-event" element={<SingleEventPage />} /> 
          <Route path="/myproflie-event" element={<MyProfileEvent />} /> 
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
