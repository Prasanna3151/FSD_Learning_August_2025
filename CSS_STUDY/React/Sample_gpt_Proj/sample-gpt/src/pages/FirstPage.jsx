import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function FirstPage() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    city: "",
    email: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    console.log("Form Data:", formData); // just logging the form data
    navigate("/second");
  };

  return (
    <div>
      <Header />
      <main style={{ padding: "20px", textAlign: "center" }}>
        <h2>Fill the Form</h2>
        <form style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px", margin: "auto" }}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <button type="button" onClick={handleNext}>Next Page</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default FirstPage;
