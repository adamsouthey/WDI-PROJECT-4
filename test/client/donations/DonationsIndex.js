/* global describe it beforeEach before after afterEach */
import React from 'react';
import { expect } from 'chai';
//environment that allows you to test a functional component
import { mount } from 'enzyme';

//Component Will Mount
//render
//Component did Mount, fetches data from API via axios
//render
//Once component did mount runs, SINON intercepts the axios request to API and generates data
import sinon from 'sinon';
import Promise from 'bluebird';
import Axios from 'axios';

import { MemoryRouter } from 'react-router-dom';
import DonationsIndex from '../../../src/components/donations/DonationsIndex';

const donationData = [{
  id: 1,
  organisation: 'Waitrose',
  contactname: 'Jon Snow',
  image: 'https://media.mnn.com/assets/images/2017/09/fresh_foods.jpg.838x0_q80.jpg',
  address: '31 Wolf St',
  telephone: '07741098483',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)'
}, {
  id: 2,
  organisation: 'Waitrose',
  contactname: 'Jon Snow',
  image: 'https://media.mnn.com/assets/images/2017/09/fresh_foods.jpg.838x0_q80.jpg',
  address: '31 Wolf St',
  telephone: '07741098483',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)'
}, {
  id: 3,
  organisation: 'Waitrose',
  contactname: 'Jon Snow',
  image: 'https://media.mnn.com/assets/images/2017/09/fresh_foods.jpg.838x0_q80.jpg',
  address: '31 Wolf St',
  telephone: '07741098483',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)'
}, {
  id: 4,
  organisation: 'Waitrose',
  contactname: 'Jon Snow',
  image: 'https://media.mnn.com/assets/images/2017/09/fresh_foods.jpg.838x0_q80.jpg',
  address: '31 Wolf St',
  telephone: '07741098483',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)'
}, {
  id: 5,
  organisation: 'Waitrose',
  contactname: 'Jon Snow',
  image: 'https://media.mnn.com/assets/images/2017/09/fresh_foods.jpg.838x0_q80.jpg',
  address: '31 Wolf St',
  telephone: '07741098483',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)'
}, {
  id: 6,
  organisation: 'Waitrose',
  contactname: 'Jon Snow',
  image: 'https://media.mnn.com/assets/images/2017/09/fresh_foods.jpg.838x0_q80.jpg',
  address: '31 Wolf St',
  telephone: '07741098483',
  category: 'Food nearing expiration',
  description: 'Collect donations at allocated time from supermarket (further details will be provided, please contact us)'
}];

describe('DonationsIndex tests', () => {
  let wrapper = null;
  let promise = null;

  before(done => {
    promise = Promise.resolve({ data: donationData });
    //intercept any get requests being made by Axios and return the promise (FoodData)
    sinon.stub(Axios, 'get').returns(promise);
    done();
  });
  //restore Axios to default working, stops Axios from intercepting any get request to API
  after(done => {
    Axios.get.restore();
    done();
  });
  beforeEach(done => {
    wrapper = mount(
      <MemoryRouter>
        <DonationsIndex />
      </MemoryRouter>
    );
    done();
  });
  it('should display donation items', done => {
    promise.then(() => {
      wrapper.update();
      expect(wrapper.find('div.image-tile').length).to.equal(2);
      done();
    });
  });

  it('should display links to show pages', done => {
    //wait for component did mount to run, get req to api
    promise.then(() => {
      //manually update render function
      wrapper.update();
      expect(wrapper.find('div.image-tile a').length).to.eq(2);
      expect(wrapper.find({ href: '/donations/1' }).length).to.eq(1);
      expect(wrapper.find({ href: '/donations/2' }).length).to.eq(1);
      expect(wrapper.find({ href: '/donations/3' }).length).to.eq(1);
      expect(wrapper.find({ href: '/donations/4' }).length).to.eq(1);
      expect(wrapper.find({ href: '/donations/5' }).length).to.eq(1);
      expect(wrapper.find({ href: '/donations/6' }).length).to.eq(1);
      done();
    });
  });

  //Add button should not display if user is not logged in
  //if theres a token in local storage, should see add button
  it('should display the add food button when logged in', done => {
    window.localStorage.setItem('token', 'FAKETOKEN');
    promise.then(() => {
      wrapper.update();
      expect(wrapper.find('a.main-button').length).to.eq(1);
      window.localStorage.removeItem('token');
      done();
    });
  });

  it('should not display the add food button when not logged in', done => {
    promise.then(() => {
      wrapper.update();
      expect(wrapper.find('a.main-button').length).to.eq(0);
      done();
    });
  });
});
