import React from 'react';
import ReactFilestack from 'filestack-react';
import BackButton from '../utility/BackButton';
import GoogleAutocomplete from './GoogleAutocomplete';
import Auth from '../../lib/Auth';
// import FancyButton from './Button';



const DonationsForm = ({ history, handleSubmit, handleChange, handleImageUpload, donation, errors, setLatLng }) => {
  // const formIsInvalid = Object.keys(errors).some(key => errors[key]);
  let type = null;
  if (Auth.getPayload()) type = Auth.getPayload().type;

  return (
    <div>
      <div className="row">
      <div className="col-md-6 formAdd">
        <form className="addDonation" onSubmit={handleSubmit} >
          <div className="form-group">
            <label htmlFor="company"></label>
            <input
              type="text"
              className="form-control"
              placeholder="Company"
              id="company"
              name="company"
              value={donation.company}
              onChange={handleChange}
            />
            {errors.company && <p className="error"><small>{errors.company}</small></p>}
          </div>


          <div className="form-group">
            <label htmlFor="contactname"></label>
            <input
              type="text"
              className="form-control"
              placeholder="Contact Name"
              id="contactname"
              name="contactname"
              value={donation.contactname}
              onChange={handleChange}
            />
            {errors.contactname && <p className="error"><small>{errors.contactname}</small></p>}
          </div>

          <div className="form-group">
            <label className="image-filestack" htmlFor="image"></label>
            <ReactFilestack
              apikey="AI85glpMjQZuhWJFfvwtsz"
              buttonText="Upload a photo"
              buttonClass="main-button"
              className="form-group"
              placeholder="Upload Image"
              id="image"
              name="image"
              value={donation.image}
              onSuccess={handleImageUpload}
            />
            {errors.image && <p className="error"><small>{errors.image}</small></p>}
          </div>
          <br />
          <div className="form-group">
            <GoogleAutocomplete  className="positionFix" setLatLng={setLatLng}/>

            <label htmlFor="address"></label>
            <input
              type="text"
              readOnly="readonly"
              className="form-control"
              placeholder="Address"
              id="address"
              name="address"
              value={donation.address}
              onChange={handleChange}
            />
            {errors.address && <p className="error"><small>{errors.address}</small></p>}
          </div>

          <div className="form-group">
            <label htmlFor="telephone"></label>
            <input
              type="text"
              className="form-control"
              placeholder="Contact Telephone"
              id="telephone"
              name="telephone"
              value={donation.telephone}
              onChange={handleChange}
            />
            {errors.telephone && <p className="error"><small>{errors.telephone}</small></p>}
          </div>

          <div className="form-group">
            <label htmlFor="description"></label>
            <input
              type="text"
              className="form-control"
              placeholder="Describe your Donation"
              id="description"
              name="description"
              value={donation.description}
              onChange={handleChange}
            />
            {errors.description && <p className="error"><small>{errors.description}</small></p>}
          </div>

          <div className="form-group">
            <label htmlFor="category"></label>
            <select
              className="form-control"
              id="category"
              name="category"
              placeholder="Please categorize your donation"
              value={donation.category}
              onChange={handleChange}
              >
                <option value="" disabled>Please Select</option>
                <option>Food nearing expiration</option>
                <option>Frozen food</option>
                <option>Household items</option>
                <option>Clothing</option>
              </select>
              {errors.category && <p className="error errorCategory"><small>{errors.category}</small></p>}
              <br />
              <br />
              <br />
              <button className="main-button">Save</button>
            </div>
          </form>

        </div>
        <div className="col-md-4 imagePreview">
          { donation.image && <div>
            <h2>Image Preview</h2>
            <br />
            <img src={donation.image} className="img-responsive" />
          </div> }
        </div>
      </div>

    </div>
  );
};

export default DonationsForm;
