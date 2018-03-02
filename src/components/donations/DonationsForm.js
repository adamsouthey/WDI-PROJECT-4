import React from 'react';
import ReactFilestack from 'filestack-react';
import BackButton from '../utility/BackButton';
import GoogleAutocomplete from './GoogleAutocomplete';
import Auth from '../../lib/Auth';



const DonationsForm = ({ history, handleSubmit, handleChange, handleImageUpload, donation, errors, setLatLng }) => {
  // const formIsInvalid = Object.keys(errors).some(key => errors[key]);
  let type = null;
  if (Auth.getPayload()) type = Auth.getPayload().type;

  return (
    <div className="row">
      <div className="page-banner col-md-12">
        <BackButton history={history} />
      </div>
      <br />
      <form onSubmit={handleSubmit} >
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
          <br />
          <ReactFilestack
            apikey="AI85glpMjQZuhWJFfvwtsz"
            buttonText="Upload a photo"
            buttonClass="main-button"
            placeholder="Upload Image"
            id="image"
            name="image"
            value={donation.image}
            onSuccess={handleImageUpload}
          />
          {errors.image && <p className="error"><small>{errors.image}</small></p>}
        </div>
        <br />

        <GoogleAutocomplete setLatLng={setLatLng}/>
        <div className="form-group">
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
        </div>
        {errors.category && <p className="error"><small>{errors.category}</small></p>}
        <div>
          <button className="main-button">Save</button>
        </div>
      </form>
      { donation.image && <div className="image-tile col-md-6">
        <h2>Image Preview</h2>
        <img src={donation.image} className="img-responsive" />
      </div> }
    </div>
  );
};

export default DonationsForm;
