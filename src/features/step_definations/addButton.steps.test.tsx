import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import Addcontactlist from '../../components/AddContactList';
const feature = loadFeature('../addButton.feature');
defineFeature(feature, test => {
    test('showing 0 initially', ({ given, when, then }) => {
      
      when('initially', () => {
        // INITIALLY
      });
  
      then('showing Mandatory field', () => {
        const data = {name: " ",email:" "};
        expect(data).toEqual({"name and email is blank"});
      });
    });
  
    test('show data', ({ given, when, then}) => {
      const testRenderer = TestRenderer.create(<Addcontactlist />);
      const testInstance = testRenderer.root;
      // let testInstance: TestRenderer.ReactTestInstance;
  
      given('user list', () => {
        // const testRenderer = TestRenderer.create(<Addcontactlist />);
        // testInstance = testRenderer.root;
      });
  
      when('clicking add', () => {
        const buttonInstance = testInstance.findByProps({ children: 'add' });
        buttonInstance.props.onClick();
      });
  
      then('showing UserData', arg0 => {
        const data = {name:"this.setState.name",email:"this.setState.email "};
        expect(data).toEqual({name: " ", email:" "});
      });
    });
  
  });
  