import React from 'react';
import ReactFilestack from 'filestack-react';
import BackButton from '../utility/BackButton';
import GoogleAutocomplete from './GoogleAutocomplete';


const DonationsForm = ({ history, handleSubmit, handleChange, handleImageUpload, donation, errors, setLatLng }) => {
  // const formIsInvalid = Object.keys(errors).some(key => errors[key]);
  return (
    <div className="row">

      <div className="page-banner col-md-12">
        <BackButton history={history} />
      </div>
      <form onSubmit={handleSubmit} className="col-md-6">
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            className="form-control"
            id="company"
            name="company"
            value={donation.company}
            onChange={handleChange}
          />
          {errors.company && <p className="error"><small>{errors.company}</small></p>}
        </div>
        <div className="form-group">
          <label htmlFor="contactname">Contact Name</label>
          <input
            type="text"
            className="form-control"
            id="contactname"
            name="contactname"
            value={donation.contactname}
            onChange={handleChange}
          />
          {errors.contactname && <p className="error"><small>{errors.contactname}</small></p>}
        </div>
        <div className="form-group">
          <label className="image-filestack" htmlFor="image">Image</label>
          <br />
          <ReactFilestack
            apikey="AI85glpMjQZuhWJFfvwtsz"
            buttonText="Upload a photo"
            buttonClass="main-button"
            id="image"
            name="image"
            value={donation.image}
            onSuccess={handleImageUpload}
          />
          {errors.image && <p className="error"><small>{errors.image}</small></p>}
        </div>


        <GoogleAutocomplete setLatLng={setLatLng}/>


        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            readOnly="readonly"
            className="form-control"
            id="address"
            name="address"
            value={donation.address}
            onChange={handleChange}
          />
          {errors.address && <p className="error"><small>{errors.address}</small></p>}
        </div>
        <div className="form-group">
          <label htmlFor="telephone">Contact Telephone</label>
          <input
            type="text"
            className="form-control"
            id="telephone"
            name="telephone"
            value={donation.telephone}
            onChange={handleChange}
          />
          {errors.telephone && <p className="error"><small>{errors.telephone}</small></p>}
        </div>
        <div className="form-group">
          <label htmlFor="description">Description of your donation</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={donation.description}
            onChange={handleChange}
          />
          {errors.description && <p className="error"><small>{errors.description}</small></p>}
        </div>
        <div className="form-group">
          <label htmlFor="category">I would like to donate:</label>
          <select
            className="form-control"
            id="category"
            name="category"
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
          <button className="save-button">Save</button>
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
