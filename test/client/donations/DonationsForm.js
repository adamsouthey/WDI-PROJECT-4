/* global describe it */

import React from 'react';
import { expect } from 'chai';
//environment that allows you to test a functional component
import { shallow } from 'enzyme';

import DonationsForm from '../../../src/components/donations/DonationsForm';


describe('DonationsForm tests', () => {
  it('should render seven input fields, one image input field and one select', done => {
    const props = {
      donation: {
        company: '',
        contactname: '',
        image: '',
        address: '',
        telephone: '',
        category: '',
        description: ''
      },
      errors: {}
    };

    const wrapper = shallow(<DonationsForm {...props} /> );

    //find something from template within DonationsForm
    //find class = .input, find id = hashtaginput
    //find length of amount of inputs you have
    expect(wrapper.find('input').length).to.equal(5);
    // image file upload
    expect(wrapper.find('.image-filestack').length).to.equal(1);
    //category
    expect(wrapper.find('select').length).to.equal(1);

    done();
  });
  it('should populate the form with prop values', done => {

    const props = {
      donation: {
        company: 'company',
        contactname: 'contactname',
        image: 'image',
        address: 'address',
        telephone: 'telephone',
        description: 'description',
        category: 'category'
      },
      errors: {}
    };
    const wrapper = shallow(<DonationsForm {...props} />);

    expect(wrapper.find({ value: 'company' }).length).to.equal(1);
    expect(wrapper.find({ value: 'contactname' }).length).to.equal(1);
    expect(wrapper.find({ value: 'image' }).length).to.equal(1);
    expect(wrapper.find({ value: 'address' }).length).to.equal(1);
    expect(wrapper.find({ value: 'telephone' }).length).to.equal(1);
    expect(wrapper.find({ value: 'description' }).length).to.equal(1);
    expect(wrapper.find({ value: 'category' }).length).to.equal(1);

    done();
  });
  it('should correctly display errors', done => {
    const props = {
      donation: {
        company: '',
        contactname: '',
        image: '',
        address: '',
        telephone: '',
        description: '',
        category: ''
      },
      errors: {
        company: 'company is required',
        contactname: 'contactname is required',
        image: 'image is required',
        address: 'address is required',
        telephone: 'telephone is required',
        description: 'description is required',
        category: 'category is required'
      }
    };

    const wrapper = shallow(<DonationsForm {...props} />);
    expect(wrapper.find('.error').length).to.equal(7);

    done();
  });
});
